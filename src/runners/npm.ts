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
        }

        await this.spawn('npm', ['init', '--yes'], options);
        return null;
    }
}

export default NpmPackageManager;