import {
    IProject,
    Project,
    Prefix,
    StringConstant,
    ignore
} from './types';
import install from './install';
import phpLaravel from './project-php-laravel'

const createProject = {
    [Project.phpLaravel]: phpLaravel
}

export default async function (params: IProject) {
    const { cliInstallOptional = false } = params;
    const createCurrentProject = createProject[params.type] || ignore;
    const project = [
        Prefix.vamtigerProject,
        params.type
    ].join(StringConstant.dash);
    const installParams = createCurrentProject && {
        projects: [project],
        cliInstallOptional
    };

    if (installParams) {
        await install(installParams);
    }

    return createCurrentProject({...params, project});
}