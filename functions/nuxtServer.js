const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

// Load the copied nuxt config.
let config = require('./nuxt.config.js');
// But do a few things differently in the Firebase environment:
// Don't start in dev mode
config.dev = false;
// Set the path to the .nuxt folder.
config.buildDir = '.nuxt';

config = {
  dev: false,
  buildDir: '.nuxt',
  // TODO: automatically parse develop projectId from .firebaserc file in the root folder.
  debug: process.env.GCP_PROJECT === 'nuxt2-example-dev',
  build: {
    publicPath: '/assets/',
  },
};

// Init Nuxt.js.
const nuxt = new Nuxt(config);
// Init express.
const app = express();
// Give nuxt middleware to express.
app.use(nuxt.render);


exports = module.exports = functions.https.onRequest(app);
