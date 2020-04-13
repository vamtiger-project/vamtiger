export declare enum Command {
    help = "help",
    project = "project"
}
export declare enum CommandDescription {
    help = "list commands",
    project = "create a new project"
}
export declare enum Project {
    phpLaravel = "php-laravel"
}
export declare enum ProjectDescription {
    phpLaravel = "PHP Laravel"
}
export declare enum ProjectExample {
    phpLaravel = "vamtiger project --type php-laravel php-laravel-project"
}
export declare enum Result {
    createdProject = "Created Project",
    ignored = "Ignored"
}
export declare enum Prefix {
    vamtigerProject = "vamtiger-project",
    doubleDash = "--"
}
export declare enum StringConstant {
    dash = "-",
    newline = "\n"
}
export declare enum ProjectOptions {
    type = "type"
}
export declare enum ProjectOptionsDescription {
    type = "Project type"
}
export declare enum HiddenProjectOptions {
    cliInstallOptional = "cliInstallOptional"
}
export declare enum Interface {
    'api' = "API",
    'cli' = "CLI"
}
export declare enum PhpLaravelPath {
    testsFeauture = "tests/Feature",
    behatYml = "behat.yml"
}
export declare enum CommandlineHelpTitle {
    vamtiger = "VAMTIGER - Web Development Utility\nhttps://www.npmjs.com/package/vamtiger",
    help = "Commands:",
    project = "Project Options:",
    projectType = "Project Types:"
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
export declare function ignore(params: any): Result;
export declare const errorMessage: {
    noProjectTypeOptionSpecified: string;
    noProjectNameOptionSpecified: string;
};
