import { resolve as resolvePath } from 'path';

export const projectFolder = resolvePath(
    __dirname,
    '..'
);

export const npmApiInstallOptional = {
    'save-optional': true,
    'prefix': projectFolder
};