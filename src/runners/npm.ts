import { spawn, SpawnOptions } from 'child_process';

import { AbstractPackageManager } from "../abstractions";

class NpmPackageManager extends AbstractPackageManager {
    /**
     * @description initializes a new project
     * @param collect {boolean} prints command output
     * @param cwd {string} current working directory
     */
    public init(
        collect: boolean = true,
        cwd: string = process.cwd(),
    ) {
        const options: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        }

        return new Promise<null>((resolve, reject) => {
            const child = spawn('npm', ['init', '--yes'], options);
            if (collect && child.stdout) {
                child.stdout.on('data', data => {
                    this.logInfo(data.toString().replace(/\r\n|\n/, ''));
                })
                resolve(null);
            }
            child.on('close', exitCode => {
                if (exitCode === 0) {
                    resolve(null);
                } else {
                    reject(exitCode);
                }
            })
        })
    }
}

export default NpmPackageManager
