export enum Command {
    help = 'help',
    project = 'project'
}

export enum CommandDescription {
    help = 'list commands',
    project = 'create a new project'
}

export enum Project {
    phpLaravel = 'php-laravel'
}

export enum ProjectDescription {
    phpLaravel = 'PHP Laravel'
}

export enum ProjectExample {
    phpLaravel = 'vamtiger project --type php-laravel php-laravel-project'
}

export enum Result {
    createdProject = 'Created Project',
    ignored = 'Ignored'
}

export enum Prefix {
    vamtigerProject = 'vamtiger-project',
    doubleDash = '--'
}

export enum StringConstant {
    dash = '-',
    newline = '\n'
}

export enum ProjectOptions {
    type = 'type'
}

export enum ProjectOptionsDescription {
    type = 'Project type'
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

export enum CommandlineHelpTitle {
    vamtiger = 'VAMTIGER - Web Development Utility\nhttps://www.npmjs.com/package/vamtiger',
    help = 'Commands:',
    project = 'Project Options:',
    projectType = 'Project Types:'
}

export interface IStringObject {
    [key: string]: string;
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
    noProjectTypeOptionSpecified: `No --${ProjectOptions.type} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} projec-name)`,
    noProjectNameOptionSpecified: `No Project Name specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} projec-name)`
};