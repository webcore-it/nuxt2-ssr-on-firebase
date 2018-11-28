#!/usr/bin/env node

'use strict';

const resolve = require('path').resolve;
const { spawnSync } = require('child_process');
const os = require('os');

// Get the npm command on unix and win.
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

// Run "npm install" in src folder.
console.log('1) --> Run "npm install" in src folder');
spawnSync(`${npmCmd} i`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './src'),
  stdio: 'inherit',
});


// Prepare package.json in functions folder.
console.log('2) --> generate the functions package.json dependencies section.');
spawnSync('node npm-generate-functions-package-json.js', {
  shell: true,
  env: process.env,
  stdio: 'inherit',
});


// Run "npm install" in functions folder.
console.log('3) --> Run "npm install" in functions folder');
spawnSync(`${npmCmd} i`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './functions'),
  stdio: 'inherit',
});
