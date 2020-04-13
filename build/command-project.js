"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("vamtiger-argv/build/main");
const types_1 = require("./types");
const project_1 = require("./project");
const args = new main_1.default();
function default_1() {
    const type = args.get(types_1.ProjectOptions.type)
        || '';
    const name = args.raw[args.raw.length - 1];
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
exports.default = default_1;
//# sourceMappingURL=command-project.js.map