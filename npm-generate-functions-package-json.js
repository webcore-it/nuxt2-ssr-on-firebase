#!/usr/bin/env node

'use strict';

const fs = require('fs');

const functionsPackage = require('./functions/package.json');
const srcPackage = require('./src/package.json');

// Merge the 'functionsDependencies' and 'nuxtDependencies' from the ./functions/package.json
// with the dependencies from the ./src/package.json.

// ?? But... WHY?
// 1. The Nuxt app in functions will need most of the packages from the /src/package.json to be able
// to run. To have the same versions of the packages, they are copied.

// 2. Firebase Functions is not able to resolve all of the dependencies from the nuxt-edge
// package.json.
// TODO: Find a better way to manage the dependencies
functionsPackage.dependencies = Object.assign(
  {},
  functionsPackage.functionsDependencies,
  functionsPackage.nuxtDependencies,
  srcPackage.dependencies
);

fs.writeFile('./functions/package.json', JSON.stringify(functionsPackage, null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log('./functions/package.json saved!');
});
