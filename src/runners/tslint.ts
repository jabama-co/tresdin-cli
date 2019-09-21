import { SpawnOptions } from 'child_process';

import Utils from '../utils/utils';

class Tslint extends Utils {
    public async init(
        collect: boolean = true,
        cwd: string = process.cwd()
    ): Promise<null> {
        const options = [
            '--init'
        ];

        const spawnOptions: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        }

        await this.spawn('tslint', options, spawnOptions);
        return null;
    }
}

export default Tslint;
