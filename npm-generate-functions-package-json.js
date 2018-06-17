#!/usr/bin/env node

'use strict';

const fs = require('fs');

const functionsPackage = require('./functions/package.json');
const srcPackage = require('./src/package.json');
const nuxtPackage = require('./src/node_modules/nuxt-edge/package.json');

// Merge the 'functions-dependencies' from the ./functions/package.json with the dependencies
// from the ./src/package.json and the dependencies from ./src/node_modules/nuxt-edge/package.json
// This is because Google Firebase Functions is not able to resolve the dependencies.
functionsPackage.dependencies = Object.assign(
  {},
  functionsPackage['functions-dependencies'],
  srcPackage.dependencies
  // nuxtPackage.dependencies
);

fs.writeFile('./functions/package.json', JSON.stringify(functionsPackage, null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log('./functions/package.json saved!');
});
