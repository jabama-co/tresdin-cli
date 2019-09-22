import { SpawnOptions } from 'child_process';

import { AbstractPackageManager } from "../abstractions";

class NpmPackageManager extends AbstractPackageManager {
    public async init(
        collect: boolean = true,
        cwd: string = process.cwd(),
    ) {
        const options: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        };

        await this.spawn('npm', ['init', '--yes'], options);
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
        };

        const installOptions = ['install', '--save', ...dependencies];
        
        await this.spawn('npm', installOptions, options);
        return null;
    }
}

export default NpmPackageManager;
