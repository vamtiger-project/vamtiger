import Args from 'vamtiger-argv/build/main';
import {
    Command,
    ProjectOptions,
    Project,
    ignore,
    errorMessage
} from './types';
import project from './project';

const args = new Args();
const { 2: commandArg } = args.raw;
const commands = {
    [Command.project]: handleProject
}
const command = commands[commandArg as Command] || ignore;

command();

function handleProject() {
    const type = args.get(ProjectOptions.type) as Project || '';
    const name = args.get(ProjectOptions.name) || '';
    const projectParams = type && name && {
        type,
        name,
        cli: true
    }

    if (!type) {
        throw new Error(errorMessage.noProjectTypeOptionSpecified);
    } else if (!name) {
        throw new Error(errorMessage.noProjectNameOptionSpecified);
    } else if (projectParams) {
        return project(projectParams);
    }
}