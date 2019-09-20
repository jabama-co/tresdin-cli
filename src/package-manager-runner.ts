import {
    NpmPackageManager,
    YarnPackageManager,
} from './runners';

function PackageManagerFactory(type: 'npm'|'yarn' = 'npm') {
    if (type === 'yarn') {
        return new YarnPackageManager();
    }

    return new NpmPackageManager();
}

export default PackageManagerFactory;
