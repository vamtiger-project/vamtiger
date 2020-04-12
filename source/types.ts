export enum Command {
    project = 'project'
}

export enum Project {
    phpLaravel = 'php-laravel'
}

export enum Result {
    createdProject = 'Created Project',
    ignored = 'Ignored'
}

export enum Prefix {
    vamtigerProject = 'vamtiger-project'
}

export enum StringConstant {
    dash = '-'
}

export enum ProjectOptions {
    type = 'type',
    name = 'name'
}

export enum HiddenProjectOptions {
    cliInstallOptional = 'cliInstallOptional'
}

export enum Interface {
    'api' = 'API',
    'cli' = 'CLI'
}

export enum PhpLaravelPath {
    testsFeauture = 'tests/Feature',
    behatYml = 'behat.yml'
}
export interface IProject {
    type: Project;
    name: string;
    project?: string;
    destination?: string;
    cli?: boolean;
    cliInstallOptional?: boolean;
}

export interface IProjectPhpLaravel {
    name: string;
    source: string;
    destination: string;
}

export interface IInstall {
    projects: string[];
    cliInstallOptional?: boolean;
}

export interface IInstalledProject {
    path: string;
}

export function ignore(params: any) {
    return Result.ignored;
}

export const errorMessage = {
    noProjectTypeOptionSpecified: `No --${ProjectOptions.type} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`,
    noProjectNameOptionSpecified: `No --${ProjectOptions.name} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`
};