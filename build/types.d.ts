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
export declare enum Interface {
    'api' = "API",
    'cli' = "CLI"
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
export declare function ignore(params: any): Result;
export declare const errorMessage: {
    noProjectTypeOptionSpecified: string;
    noProjectNameOptionSpecified: string;
};
