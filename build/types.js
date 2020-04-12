"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command;
(function (Command) {
    Command["project"] = "project";
})(Command = exports.Command || (exports.Command = {}));
var Project;
(function (Project) {
    Project["phpLaravel"] = "php-laravel";
})(Project = exports.Project || (exports.Project = {}));
var Result;
(function (Result) {
    Result["createdProject"] = "Created Project";
    Result["ignored"] = "Ignored";
})(Result = exports.Result || (exports.Result = {}));
var Prefix;
(function (Prefix) {
    Prefix["vamtigerProject"] = "vamtiger-project";
})(Prefix = exports.Prefix || (exports.Prefix = {}));
var StringConstant;
(function (StringConstant) {
    StringConstant["dash"] = "-";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var ProjectOptions;
(function (ProjectOptions) {
    ProjectOptions["type"] = "type";
    ProjectOptions["name"] = "name";
})(ProjectOptions = exports.ProjectOptions || (exports.ProjectOptions = {}));
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
function ignore(params) {
    return Result.ignored;
}
exports.ignore = ignore;
exports.errorMessage = {
    noProjectTypeOptionSpecified: `No --${ProjectOptions.type} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`,
    noProjectNameOptionSpecified: `No --${ProjectOptions.name} option specified (e.g. ${Prefix.vamtigerProject} ${Command.project} --${ProjectOptions.type} ${Project.phpLaravel} --${ProjectOptions.name} projec-name)`
};
//# sourceMappingURL=types.js.map