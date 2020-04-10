"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const npm = require("npm");
const loadParams = {
    loglevel: 'silent'
};
function default_1(params) {
    return new Promise((resolve, reject) => {
        const { project } = params;
        npm.load(loadParams, (error, loadData) => {
            if (error) {
                reject(error);
            }
            else {
                npm.commands.install([project], (error, installData) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve({
                            loadData,
                            installData
                        });
                    }
                });
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=install.js.map