"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("./types");
const project_1 = require("./project");
const args = new main_1.default();
const { 2: commandArg } = args.raw;
const commands = {
    [types_1.Command.project]: handleProject
};
const command = commands[commandArg] || types_1.ignore;
command();
function handleProject() {
    const type = args.get(types_1.ProjectOptions.type) || '';
    const name = args.get(types_1.ProjectOptions.name) || '';
    const projectParams = type && name && {
        type,
        name,
        cli: true
    };
    if (!type) {
        throw new Error(types_1.errorMessage.noProjectTypeOptionSpecified);
    }
    else if (!name) {
        throw new Error(types_1.errorMessage.noProjectNameOptionSpecified);
    }
    else if (projectParams) {
        return project_1.default(projectParams);
    }
}
//# sourceMappingURL=vamtiger.js.map