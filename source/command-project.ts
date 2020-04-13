import Args from 'vamtiger-argv/build/main';
import {
    ProjectOptions,
    Project,
    errorMessage
} from './types';
import project from './project';

const args = new Args();

export default function () {
    const type = args.get(ProjectOptions.type) as Project
        || '';
    const name = args.raw[args.raw.length - 1];
    const projectParams = type && name && {
        type,
        name,
        cli: true
    };

    if (!type) {
        throw new Error(errorMessage.noProjectTypeOptionSpecified);
    } else if (!name) {
        throw new Error(errorMessage.noProjectNameOptionSpecified);
    } else if (projectParams) {
        return project(projectParams);
    }
}