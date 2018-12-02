#!/usr/bin/env node
'use strict';

/**
 * To be able to run Firebase functions, the package.json for Firebase must include a few
 * more packages, the Nuxt app does not need. Also the devDependencies of the Nuxt app are
 * not needed for the Firebase functions and will be removed.
 *
 * To keep all dependencies organized in one package.json file in the projects root,
 * this file builds the package.json for the functions folder.
 */

const fs = require('fs');
const packageJson = require('./package.json');

// Merge dependencies
packageJson.dependencies = Object.assign(
  {},
  packageJson.dependencies,
  packageJson.firebaseFunctionsDependencies
);

// Remove unwanted dependencies.
packageJson.devDependencies = {};

// Remove merged dependencies.
packageJson.firebaseFunctionsDependencies = {};

// Remove npm post install.
delete packageJson.scripts.postinstall;

fs.writeFile('./functions/package.json', JSON.stringify(packageJson, null, 2), (error) => {
  if (error) {
    throw error;
  }
});
