#!/usr/bin/env node

'use strict';

const resolve = require('path').resolve;
const { spawnSync } = require('child_process');
const os = require('os');

// Get the npm command on unix and win.
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

// npm i in src folder.
console.log('1) --> npm install in src folder');
spawnSync(`${npmCmd} i`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './src'),
  stdio: 'inherit',
});


// npm i in functions folder.
console.log('2) --> generate the functions package.json dependencies section.');
spawnSync('node npm-generate-functions-package-json.js', {
  shell: true,
  env: process.env,
  stdio: 'inherit',
});


// npm i in functions folder.
console.log('3) --> npm install in functions folder');
spawnSync(`${npmCmd} i`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './functions'),
  stdio: 'inherit',
});
