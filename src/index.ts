#!/usr/bin/env node

import program from 'commander';
import { promises } from 'fs';
import { resolve as resolvepath } from 'path';

import pkgManagerFactory from './package-manager-runner';
import {
    Tslint,
    Typescript,
} from './runners';

program
.option('--npm', 'default - use npm as package manager.')
.option('--yarn', 'use yarn as package manager.');

program.parse(process.argv);

const dependencies = [
    'typescript',
    'tslint',
];

async function initiate() {
    const projectName = program.args[0];
    const projectDir = projectName ? resolvepath(process.cwd(), projectName) : process.cwd();

    await promises.mkdir(projectDir);

    const pkgManager = pkgManagerFactory(program.yarn ? 'yarn' : 'npm');
    await pkgManager.init(true, projectDir);
    await pkgManager.install(dependencies, true, projectDir);
    
    const tsc = new Typescript();
    await tsc.init(true, projectDir);

    const tslint = new Tslint();
    await tslint.init(true, projectDir);
}

initiate();
