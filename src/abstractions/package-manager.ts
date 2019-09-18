abstract class AbstractPackageManager {
    /**
     * @description initializes a new project
     * @param cwd {string} current working directory
     * @param collect {boolean} prints command output
     * @return {Promise<null>} done
     */
    public abstract init(collect: boolean, cwd: string): Promise<null>;
    /**
     * @description installs production dependencies
     * @param dependencies {Array<string>} production dependencies
     */
    // public abstract install(...dependencies: string[]): Promise<null>;
    /**
     * @description installs development dependencies
     * @param dependencies {Array<string>} development dependencies
     */
    // public abstract installDev(...dependencies: string[]): Promise<null>;
    /**
     * 
     * @param data {string} data to be printed to console
     */
    protected logInfo(data: string): void {
        // just for now
        console.info(data);
    }
}

export default AbstractPackageManager;
