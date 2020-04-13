import Args from 'vamtiger-argv/build/main';
import {
    Command,
    CommandDescription,
    ProjectOptions,
    Project,
    ignore,
    errorMessage
} from './types';
import project from './command-project';
import help from './command-help';

const args = new Args();
const { 2: commandArg } = args.raw;
const currentCommand = Command[commandArg as Command];
const commands = {
    [Command.help]: help,
    [Command.project]: project
}
const command = commands[currentCommand] || ignore;

command();