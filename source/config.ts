import { resolve as resolvePath } from 'path';

export const projectFolder = resolvePath(
    __dirname,
    '..'
);

export const npmApiInstallOptional = {
    'save-optional': true,
    'no-audit': true,
    'prefix': projectFolder
};