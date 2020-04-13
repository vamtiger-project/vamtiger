import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import { Given, Then, When, World, Before, After, setDefaultTimeout } from 'cucumber';
import createFolder from 'vamtiger-create-directory';
import getFolderContent from 'vamtiger-get-directory-content';
import remove from 'vamtiger-remove';
import bash from 'vamtiger-bash';
import Args from 'vamtiger-argv/build/main';
import {
    Command,
    Project,
    Result,
    Interface,
    HiddenProjectOptions,
    ignore } from '../../../types';
import project from '../../../project';

interface IContext extends World {
    command?: Command;
    type?: Project;
    name?: string;
    apiResult?: string;
    cliResult?: string;
}

const args = new Args();
const projectFolderName = 'project';
const projectFolder = resolvePath(
    __dirname,
    projectFolderName
);
const bashOptions = {
    cwd: projectFolder
}
const bashProgram = resolvePath(
    __dirname,
    '../../../..'
);
const expectedResult = new RegExp(Result.createdProject, 'm');

setDefaultTimeout((60 * 1000) * 5);

Before(async function () {
    await createFolder(projectFolder).catch(ignore);
});

After(clean);

Given('{string} command', function (this: IContext, command: Command) {
    this.command = command;
});

Given('project type is {string}', function (this: IContext, type: Project) {
    this.type = type;
});

Given('project name is {string}', function (this: IContext, name: string) {
    this.name = name;
});

When(`running the command via the ${Interface.api}`, async function (this: IContext) {
    const apiResult = this.type && this.name && await project({
        type: this.type,
        name: this.name,
        destination: projectFolder,
        // this is to silence summary npm output postn install
        // for better readability of test results
        cliInstallOptional: args.has(HiddenProjectOptions.cliInstallOptional)
    }) || '';

    this.apiResult = apiResult.toString();

    await clean();
});

When(`running the command via the ${Interface.cli}`, async function () {
    const cliCommand = `node ${bashProgram} ${this.command} --type ${this.type} ${this.name}`;
    const cliResult = await bash(cliCommand, bashOptions);

    this.cliResult = cliResult.toString();
});

Then('a new project should be created', async function (this: IContext) {
    const folderContent = await getFolderContent(projectFolder);
    const createdProject = Boolean(this.name && folderContent.includes(this.name));

    expect(createdProject).to.be.true;
    expect(this.apiResult).to.match(expectedResult);
    expect(this.cliResult).to.match(expectedResult);
});

async function clean() {
    const removeParams = {
        folder: projectFolder
    };

    await remove(removeParams);
}