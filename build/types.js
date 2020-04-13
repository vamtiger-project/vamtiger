"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command;
(function (Command) {
    Command["help"] = "help";
    Command["project"] = "project";
})(Command = exports.Command || (exports.Command = {}));
var CommandDescription;
(function (CommandDescription) {
    CommandDescription["help"] = "list commands";
    CommandDescription["project"] = "create a new project";
})(CommandDescription = exports.CommandDescription || (exports.CommandDescription = {}));
var Project;
(function (Project) {
    Project["phpLaravel"] = "php-laravel";
})(Project = exports.Project || (exports.Project = {}));
var ProjectDescription;
(function (ProjectDescription) {
    ProjectDescription["phpLaravel"] = "PHP Laravel";
})(ProjectDescription = exports.ProjectDescription || (exports.ProjectDescription = {}));
var ProjectExample;
(function (ProjectExample) {
    ProjectExample["phpLaravel"] = "vamtiger project --type php-laravel php-laravel-project";
})(ProjectExample = exports.ProjectExample || (exports.ProjectExample = {}));
var Result;
(function (Result) {
    Result["createdProject"] = "Created Project";
    Result["ignored"] = "Ignored";
})(Result = exports.Result || (exports.Result = {}));
var Prefix;
(function (Prefix) {
    Prefix["vamtigerProject"] = "vamtiger-project";
    Prefix["doubleDash"] = "--";
})(Prefix = exports.Prefix || (exports.Prefix = {}));
var StringConstant;
(function (StringConstant) {
    StringConstant["dash"] = "-";
    StringConstant["newline"] = "\n";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var ProjectOptions;
(function (ProjectOptions) {
    ProjectOptions["type"] = "type";
})(ProjectOptions = exports.ProjectOptions || (exports.ProjectOptions = {}));
var ProjectOptionsDescription;
(function (ProjectOptionsDescription) {
    ProjectOptionsDescription["type"] = "Project type";
})(ProjectOptionsDescription = exports.ProjectOptionsDescription || (exports.ProjectOptionsDescription = {}));
var HiddenProjectOptions;
(function (HiddenProjectOptions) {
    HiddenProjectOptions["cliInstallOptional"] = "cliInstallOptional";
})(HiddenProjectOptions = exports.HiddenProjectOptions || (exports.HiddenProjectOptions = {}));
var Interface;
(function (Interface) {
    Interface["api"] = "API";
    Interface["cli"] = "CLI";
})(Interface = exports.Interface || (exports.Interface = {}));
var PhpLaravelPath;
(function (PhpLaravelPath) {
    PhpLaravelPath["testsFeauture"] = "tests/Feature";
    PhpLaravelPath["behatYml"] = "behat.yml";
})(PhpLaravelPath = exports.PhpLaravelPath || (exports.PhpLaravelPath = {}));
var CommandlineHelpTitle;
(function (CommandlineHelpTitle) {
    CommandlineHelpTitle["vamtiger"] = "VAMTIGER - Web Development Utility\nhttps://www.npmjs.com/package/vamtiger";
    CommandlineHelpTitle["help"] = "Commands:";
    CommandlineHelpTitle["project"] = "Project Options:";
    CommandlineHelpTitle["projectType"] = "Project Types:";
})(CommandlineHelpTitle = exports.CommandlineHelpTitle || (exports.CommandlineHelpTitle = {}));
function ignore(params) {
    return Result.ignored;
}
exports.ignore = ignore;
exports.errorMessage = {
    noProjectTypeOptionSpecified: `No --${ProjectOptions.type} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} projec-name)`,
    noProjectNameOptionSpecified: `No Project Name specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} projec-name)`
};
//# sourceMappingURL=types.js.map