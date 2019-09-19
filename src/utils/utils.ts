import { spawn, SpawnOptions } from 'child_process';

class Utils {
    /**
     * 
     * @param data {string} data to be printed to console
     */
    protected logInfo(data: string, autoReplace: boolean = true): void {
        // just for now
        if (autoReplace) {
            console.info(data.toString().replace(/\r\n|\n/, ''));
            return;
        }

        console.info(data);
    }
    /**
     * 
     * @param err {string|Error} error
     */
    protected logError(err: string|Error) {
        console.error(err);
    }
    /**
     * 
     * @param command {string} command to be executed
     * @param args {Array<string>} command arguments
     * @param options {Object} child process options
     * @param collect {boolean} prints command output
     */
    protected spawn(command: string, args: string[], options: SpawnOptions, collect: boolean = true) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, args, options);
            if (collect && child.stdout) {
                child.stdout.on('data', data => {
                    this.logInfo(data);
                });
                resolve(null);
            }
            child.on('close', exitCode => {
                if (exitCode === 0) {
                    resolve(null);
                } else {
                    reject(exitCode);
                }
            });
        })
    }
}

export default Utils;
