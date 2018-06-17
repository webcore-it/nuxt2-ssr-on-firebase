// require('dotenv').config({path: './../src/.env'});

const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt-edge');

const app = express();
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/',
  },
});

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.get('*', handleRequest);

app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);

/**
 * Backend function to determine the winner of the everlasting fight red vs. blue.
 *
 * TODO: This should live outside of index.js
 *
 */
exports.getRedVsBlue = functions.https.onRequest((request, response) => {
  const time = new Date().getTime();
  let winner = { time };

  if (time & 1) { // Timestamp is odd.
    winner.name = 'blue';
  } else { // Timestamp is even.
    winner.name = 'red';
  }
  response.send(winner);

});
