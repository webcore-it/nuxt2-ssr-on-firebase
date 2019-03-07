#!/usr/bin/env node
'use strict';

const resolve = require('path').resolve;
const { spawnSync } = require('child_process');
const os = require('os');
const consola = require('consola');

// Get the npm command on unix and win.
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';


// Prepare package.json in functions folder.
consola.info({
  message: 'Generate the functions package.json file...',
  badge: true
});
spawnSync('node npm-generate-functions-package-json.js', {
  shell: true,
  env: process.env,
  stdio: 'inherit',
});
consola.info({
  message: '... package.json generated - DONE',
  badge: true
});


// Run "npm install" in functions folder.
consola.info({
  message: 'Run "npm install" in functions folder...',
  badge: true
});
spawnSync(`${npmCmd} i`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './functions'),
  stdio: 'inherit',
});
consola.info({
  message: '... packages in functions folder installed - DONE',
  badge: true
});
