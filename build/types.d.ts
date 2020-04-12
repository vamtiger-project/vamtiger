export declare enum Command {
    project = "project"
}
export declare enum Project {
    phpLaravel = "php-laravel"
}
export declare enum Result {
    createdProject = "Created Project",
    ignored = "Ignored"
}
export declare enum Prefix {
    vamtigerProject = "vamtiger-project"
}
export declare enum StringConstant {
    dash = "-"
}
export declare enum ProjectOptions {
    type = "type",
    name = "name"
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
