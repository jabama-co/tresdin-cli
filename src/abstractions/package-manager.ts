import Utils from "../utils/utils";

abstract class AbstractPackageManager extends Utils {
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
    public abstract install(dependencies: string[], collect: boolean, cwd: string): Promise<null>;
    /**
     * @description installs development dependencies
     * @param dependencies {Array<string>} development dependencies
     */
    // public abstract installDev(...dependencies: string[]): Promise<null>;
}

export default AbstractPackageManager;
