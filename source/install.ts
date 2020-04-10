import NPM = require('npm');
const npm = require('npm') as typeof NPM;
import {
    IInstall
} from './types';

const loadParams = {
    loglevel: 'silent',
    progress: false
};

export default function (params: IInstall) {return new Promise((resolve, reject) => {
    const { project } = params;

    npm.load(loadParams, (error, loadData) => {
        if (error) {
            reject(error);
        } else {
            npm.commands.install([project], (error, installData) => {
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