const functions = require('firebase-functions');

// Backend API function to determine the winner of the everlasting fight red vs. blue.
exports = module.exports = functions.https.onRequest((req, res) => {
  const time = new Date().getTime();
  let winner = { time };

  if (time & 1) { // Timestamp is odd.
    winner.name = 'blue';
  } else { // Timestamp is even.
    winner.name = 'red';
  }
  res.send(winner);

});
