/**
 * This file defines all functions available on Firebase.
 */

// Export the Nuxt server as "ssrapp".
exports.ssrapp = require('./nuxtServer');


// Export the redVsBlue API as "getRedVsBlue".
exports.getRedVsBlue = require('./api/redVsBlue');
