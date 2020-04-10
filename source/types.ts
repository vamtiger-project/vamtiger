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

export enum Interface {
    'api' = 'API',
    'cli' = 'CLI'
}

export interface IProject {
    type: Project;
    name: string;
    project?: string;
    destination?: string;
    cli?: boolean;
}

export interface IInstall {
    project: string;
}

export function ignore(params: any) {
    return Result.ignored;
}

export const errorMessage = {
    noProjectTypeOptionSpecified: `No --${ProjectOptions.type} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`,
    noProjectNameOptionSpecified: `No --${ProjectOptions.name} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`
};