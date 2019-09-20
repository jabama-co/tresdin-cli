import { SpawnOptions } from 'child_process';
import { CompilerOptions } from 'typescript';

import Utils from '../utils/utils';

class Typescript extends Utils {
    private readonly defaultOptions: CompilerOptions = {
        target: 'es2015' as any,
        allowJs: true,
        // when using `lib` as an cli argument, its value doesn't have to be an array of string
        lib: 'es2019' as any,
        outDir: './dist',
        rootDir: './src',
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
    };

    public async init(
        collect: boolean = true,
        cwd: string = process.cwd(),
        options?: CompilerOptions
        ): Promise<null> {
        
        const parsedOptions = this.parseOptions(options || this.defaultOptions);
        const spawnOptions: SpawnOptions = {
            cwd,
            stdio: collect ? 'pipe' : 'inherit',
            shell: true,
        }

        await this.spawn('tsc', parsedOptions, spawnOptions);
        return null;
    }

    private parseOptions(options: CompilerOptions): string[] {
        const optionsWithInit = Object.assign({}, options, { init: true });
        return Object.keys(optionsWithInit)
        .map(key => {
            const isBoolean = typeof options[key] === 'boolean';
            return [`--${key}`, String(...(isBoolean ? [] : [options[key]]))];
        })
        .flat();
    }
}

export default Typescript;
