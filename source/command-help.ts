import commandLineHelp from 'vamtiger-commandline-help';
import Args from 'vamtiger-argv/build/main';
import {
    Project,
    ProjectDescription,
    ProjectExample,
    Command,
    StringConstant,
    CommandDescription,
    CommandlineHelpTitle,
    Prefix,
    ProjectOptions,
    ProjectOptionsDescription,
    ignore
    } from './types';

const args = new Args();
const getHelp = {
    [Command.help]: help,
    [Command.project]: projectHelp
}

export default function () {
    const { 3: commandArg } = args.raw;
    const command = Command[(commandArg|| Command.help) as Command];
    const getHelpText = getHelp[command] || ignore;
    const helpText = [
        CommandlineHelpTitle.vamtiger,
        '',
        getHelpText()
    ].join(StringConstant.newline);

    console.log(helpText);

    return helpText;
}

function help() {
    const helpText = [
        CommandlineHelpTitle.help,
        commandLineHelp({
            command: Command,
            description: CommandDescription
        })
    ].join(StringConstant.newline);

    return helpText;
}

function projectHelp() {
    const helpText = [
        CommandlineHelpTitle.project,
        commandLineHelp(
            {
                option: ProjectOptions,
                description: ProjectOptionsDescription
            },
            {
                options: ['option']
            }
        ),
        '',
        CommandlineHelpTitle.projectType,
        commandLineHelp({
            projectType: Project,
            description: ProjectDescription,
            example: ProjectExample
        })
    ].join(StringConstant.newline);

    return helpText;
}