import {
    IProject,
    Project,
    CommandlineHelpTitle,
    Prefix,
    StringConstant,
    Result,
    ignore
} from './types';
import install from './install';
import phpLaravel from './project-php-laravel'

const createProject = {
    [Project.phpLaravel]: phpLaravel
}

export default async function (params: IProject) {
    const { cliInstallOptional = false , cli = false } = params;
    const cliMessage = cli && [
        CommandlineHelpTitle.vamtiger,
        '',
        Result.createdProject,
    ].join(StringConstant.newline);
    const createCurrentProject = createProject[params.type] || ignore;
    const project = [
        Prefix.vamtigerProject,
        params.type
    ].join(StringConstant.dash);
    const installParams = createCurrentProject && {
        projects: [project],
        cliInstallOptional: cliInstallOptional || cli
    };

    if (installParams) {
        await install(installParams);
    }

    await createCurrentProject({...params, project});

    if (cliMessage) {
        console.log(cliMessage);
    }

    return Result.createdProject;
}