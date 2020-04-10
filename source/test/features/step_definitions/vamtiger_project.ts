import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import { Given, Then, When, World, Before, After, setDefaultTimeout } from 'cucumber';
import createFolder from 'vamtiger-create-directory';
import remove from 'vamtiger-remove';
import bash from 'vamtiger-bash';
import { Command, Project, Result, ignore } from '../../../types';
import project from '../../../project';

interface IContext extends World {
    command?: Command;
    type?: Project;
    name?: string;
    apiResult?: string;
    cliResult?: string;
}

const projectFolderName = 'project';
const projectFolder = resolvePath(
    __dirname,
    projectFolderName
);
const bashOptions = {
    cwd: projectFolder
}

setDefaultTimeout(60 * 1000);

Before(async function () {
    await createFolder(projectFolder).catch(ignore);
});

After(async function () {
    const removeParams = {
        folder: projectFolder
    };

    await remove(removeParams);
})

Given('{string} command', function (this: IContext, command: Command) {
    this.command = command;
});

Given('project type: {string}', function (this: IContext, type: Project) {
    this.type = type;
});

Given('project name: {string}', function (this: IContext, name: string) {
    this.name = name;
});

When('running the command', async function (this: IContext) {
    const params = this.type && this.name && {
        type: this.type,
        name: this.name,
        destination: projectFolder
    };
    const cliCommand = `node . ${this.command} --type ${this.type} --name ${this.name}-cli`;
    const apiResult = params && await project(params);
    // const cliResult = await bash(cliCommand, bashOptions);

    this.apiResult = apiResult?.toString();
    // this.cliResult = cliResult.toString();
})

Then('a new project should be created', function (this: IContext) {
    expect(this.apiResult).to.equal(Result.createdProject);
    // expect(this.cliResult).to.equal(Result.createdProject);
});