import { SpawnOptions } from 'child_process';

import { AbstractPackageManager } from "../abstractions";

class YarnPackageManager extends AbstractPackageManager {
    public async init(
        collect: boolean = true,
        cwd: string = process.cwd(),
    ) {
        const options: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        }

        await this.spawn('yarn', ['init', '--yes'], options);
        return null;
    }

    public async install(
        dependencies: string[],
        collect: boolean = true,
        cwd: string = process.cwd(),
    ) {
        const options: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        }

        const installOptions = ['add', ...dependencies];
        
        await this.spawn('yarn', installOptions, options);
        return null;
    }
}

export default YarnPackageManager;
