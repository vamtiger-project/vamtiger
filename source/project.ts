import {copy} from 'vamtiger-copy';
import {
    IProject,
    Project,
    Prefix,
    StringConstant,
    Result,
    ignore
} from './types';
import install from './install';

const createProject = {
    [Project.phpLaravel]: createPhpLaravelProject
}

export default async function (params: IProject) {
    const createCurrentProject = createProject[params.type] || ignore;
    const project = [
        Prefix.vamtigerProject,
        params.type
    ].join(StringConstant.dash);
    const installParams = createCurrentProject && { project };

    if (installParams) {
        await install(installParams);
    }

    return createCurrentProject({...params, project});
}

async function createPhpLaravelProject(params: IProject) {
    const {
        project,
        destination = process.cwd(),
        cli = false
    } = params;
    const { path: source } = project && require(project)
        || { path: '' };
    const copyParams = {
        source,
        destination
    }

    await copy(copyParams);

    if (cli) {
        console.log(Result.createdProject);
    }

    return Result.createdProject;
}