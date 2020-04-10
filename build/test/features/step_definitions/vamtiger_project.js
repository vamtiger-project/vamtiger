"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const vamtiger_create_directory_1 = require("vamtiger-create-directory");
const vamtiger_remove_1 = require("vamtiger-remove");
const types_1 = require("../../../types");
const project_1 = require("../../../project");
const projectFolderName = 'project';
const projectFolder = path_1.resolve(__dirname, projectFolderName);
const bashOptions = {
    cwd: projectFolder
};
cucumber_1.setDefaultTimeout(60 * 1000);
cucumber_1.Before(async function () {
    await vamtiger_create_directory_1.default(projectFolder).catch(types_1.ignore);
});
cucumber_1.After(async function () {
    const removeParams = {
        folder: projectFolder
    };
    await vamtiger_remove_1.default(removeParams);
});
cucumber_1.Given('{string} command', function (command) {
    this.command = command;
});
cucumber_1.Given('project type: {string}', function (type) {
    this.type = type;
});
cucumber_1.Given('project name: {string}', function (name) {
    this.name = name;
});
cucumber_1.When('running the command', async function () {
    const params = this.type && this.name && {
        type: this.type,
        name: this.name,
        destination: projectFolder
    };
    const cliCommand = `node . ${this.command} --type ${this.type} --name ${this.name}-cli`;
    const apiResult = params && await project_1.default(params);
    // const cliResult = await bash(cliCommand, bashOptions);
    this.apiResult = apiResult === null || apiResult === void 0 ? void 0 : apiResult.toString();
    // this.cliResult = cliResult.toString();
});
cucumber_1.Then('a new project should be created', function () {
    chai_1.expect(this.apiResult).to.equal(types_1.Result.createdProject);
    // expect(this.cliResult).to.equal(Result.createdProject);
});
//# sourceMappingURL=vamtiger_project.js.map