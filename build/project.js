"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_copy_1 = require("vamtiger-copy");
const types_1 = require("./types");
const install_1 = require("./install");
const createProject = {
    [types_1.Project.phpLaravel]: createPhpLaravelProject
};
async function default_1(params) {
    const createCurrentProject = createProject[params.type] || types_1.ignore;
    const project = [
        types_1.Prefix.vamtigerProject,
        params.type
    ].join(types_1.StringConstant.dash);
    const installParams = createCurrentProject && { project };
    if (installParams) {
        await install_1.default(installParams);
    }
    return createCurrentProject(Object.assign(Object.assign({}, params), { project }));
}
exports.default = default_1;
async function createPhpLaravelProject(params) {
    const { project, destination = process.cwd(), cli = false } = params;
    const { path: source } = project && require(project)
        || { path: '' };
    const copyParams = {
        source,
        destination
    };
    await vamtiger_copy_1.copy(copyParams);
    if (cli) {
        console.log(types_1.Result.createdProject);
    }
    return types_1.Result.createdProject;
}
//# sourceMappingURL=project.js.map