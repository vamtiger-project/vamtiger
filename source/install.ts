import * as npm from 'npm';
import bash from 'vamtiger-bash';
import {
    IInstall
} from './types';
import {
    npmApiInstallOptional,
    projectFolder
} from './config';
import bashScript from './bash';

export default function (params: IInstall) {
    const {
        cliInstallOptional: cliOptional } = params;
    const currentInstall = cliOptional ? cliInstallOptional
        : apiInstall;

    return currentInstall(params);
}

async function cliInstallOptional(params: IInstall) {
    const { projects } = params;
    const currentProjects = projects.join(' ');
    const command = `${bashScript['npm-install-save-optional.sh'].trim()} --prefix ${projectFolder} ${currentProjects}`;
    const result = await bash(command);

    return result.toString();
}

function apiInstall(params: IInstall) {return new Promise((resolve, reject) => {
    const { projects } = params;

    npm.load(npmApiInstallOptional, (error, loadData) => {
        if (error) {
            reject(error);
        } else {
            npm.commands.install(projects, (error, installData) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        loadData,
                        installData
                    });
                }
            });
        }
    });
})}