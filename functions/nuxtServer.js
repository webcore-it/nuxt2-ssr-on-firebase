const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

// Use a very simplified version of the config to run the already
// build app on Firebase Functions.
const config = {
  // Don't start in dev mode.
  dev: false,
  // Set the path to the .nuxt folder.
  buildDir: '.nuxt',
  // Enable debug when in the develop environment.
  debug: process.env.GCP_PROJECT === 'nuxt2-example-dev',
  // Path to the assets.
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
