#!/usr/bin/env node

'use strict';

const resolve = require('path').resolve;
const { spawnSync } = require('child_process');
const os = require('os');

// Get the npm command on unix and win.
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

// npm run lint in src folder.
console.log('1) --> npm lint in src folder');
spawnSync(`${npmCmd} run lint`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './src'),
  stdio: 'inherit',
});

// npm run lint in functions folder.
console.log('2) --> npm lint in functions folder');
spawnSync(`${npmCmd} run lint`, {
  shell: true,
  env: process.env,
  cwd: resolve(__dirname, './functions'),
  stdio: 'inherit',
});
