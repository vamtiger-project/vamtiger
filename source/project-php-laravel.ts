import { resolve as resolvePath } from 'path';
import {copy} from 'vamtiger-copy';
import copyFile from 'vamtiger-copy-file';
import bash from 'vamtiger-bash';
import getFolderContent from 'vamtiger-get-directory-content';
import createFolder from 'vamtiger-create-directory';
import remove from 'vamtiger-remove';
import {
    IProject,
    IInstalledProject,
    IProjectPhpLaravel,
    Result,
    PhpLaravelPath } from './types';
import bashScript from './bash';

export default async function (params: IProject) {
    const {
        project,
        name: projectFolder = '',
        destination = process.cwd(),
        cli = false
    } = params;
    const { path: source }: IInstalledProject = project && require(project)
        || { path: '' };
    const folderContent = await getFolderContent(destination);
    const currentDestination = projectFolder &&
        resolvePath(
            destination,
            projectFolder
        )
        ||
        destination;
    const composerIsInstalled = await bash(bashScript['php-laravel-is-composer-installed.sh'])
        .then(output => Boolean(output.toString().trim()));
    const copyParams = {
        source,
        destination: currentDestination
    }

    if (!folderContent.includes(projectFolder)) {
        await createFolder(currentDestination);
    }

    if (composerIsInstalled) {
        await createProjectWithComposer({
            name: projectFolder,
            source,
            destination: currentDestination
        });
    } else {
        await copy(copyParams);
    }

    if (cli) {
        console.log(Result.createdProject);
    }

    return Result.createdProject;
}

async function createProjectWithComposer(params: IProjectPhpLaravel) {
    const {
        source,
        destination: cwd
        } = params;
    const sourceTestsFeaturesFolder = resolvePath(
        source,
        PhpLaravelPath.testsFeauture
    );
    const sourceBehatYml = resolvePath(
        source,
        PhpLaravelPath.behatYml
    );
    const destinationBehatYml = resolvePath(
        cwd,
        PhpLaravelPath.behatYml
    );
    const destinationTestFeaturesFolder = resolvePath(
        cwd,
        PhpLaravelPath.testsFeauture
    );
    const bashOptions = {
        cwd
    };
    const creatProject = await Promise.all([
        bash(
            bashScript['php-laravel-create-project.sh'],
            bashOptions
        ).catch(error => error)
    ]);
    const installDevDependencies = await bash(
        bashScript['php-laravel-install-dev-dependencies.sh'],
        bashOptions
    ).catch(error => error);
    const removeTests = await remove({
        folder: destinationTestFeaturesFolder
    }).catch((error: any) => error);
    const copyTests = await copy({
        source: sourceTestsFeaturesFolder,
        destination: destinationTestFeaturesFolder
    }).catch((error: any) => error);
    const copyBehatYml = await copyFile({
        source: sourceBehatYml,
        destination: destinationBehatYml
    });
    const result = {
        creatProject: creatProject.toString(),
        installDevDependencies: installDevDependencies.toString(),
        removeTests,
        copyTests,
        copyBehatYml
    };

    return result;
}