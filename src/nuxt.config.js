require('dotenv').config();

module.exports = {
  // ======================================================================
  // Set head section of the page.
  // ======================================================================
  head: {
    title: 'Nuxt.js 2.0 ssr app on Google Firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Example for hosting a Nuxt.js 2.0 ssr app on Google Firebase.',
      },
      { name: 'apple-mobile-web-app-title', content: 'Nuxt 2 Firebase' },
      { name: 'application-name', content: 'Nuxt 2 Firebase' },
      { name: 'msapplication-TileColor', content: '#03A9F4' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#03A9F4' },
    ],
    script: [],
  },

  // ======================================================================
  // Customize the progress bar color.
  // ======================================================================
  loading: { color: '#E91E63' },

  // ======================================================================
  // Global CSS
  // ======================================================================
  css: [],

  // ======================================================================
  // Setup modules
  // ======================================================================
  modules: [
    '@nuxtjs/axios',

    ['@nuxtjs/vuetify', {
      theme: {
        primary: '#03A9F4',
        secondary: '#009688',
        accent: '#E91E63',
        error: '#f44336',
        warning: '#FDD835',
        info: '#2196f3',
        success: '#4caf50',
      },
    }],
  ],

  // ======================================================================
  // Setup plugins
  // ======================================================================
  plugins: [
    {
      src: '~/plugins/firebase',
    },
  ],

  // ======================================================================
  // Map system env props to internal env. (https://nuxtjs.org/api/configuration-env)
  // Create a .env file in the same folder as this nuxt.config.js to set your local env variables.
  // ======================================================================
  env: {
    baseUrl: process.env.BASE_URL || '',
    apiBaseUrl: process.env.API_BASE_URL || '',
    firebaseConfig: {
      apiKey: process.env.FIREBASE_CONFIG_API_KEY || '',
      authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN || '',
      databaseURL: process.env.FIREBASE_CONFIG_DATABASE_URL || '',
      projectId: process.env.FIREBASE_CONFIG_PROJECT_ID || '',
      storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET || '',
      messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID || '',
    },
  },

  // ======================================================================
  // Build configuration
  // ======================================================================
  buildDir: process.env.BUILD_DIR || './../functions/.nuxt',
  build: {
    analyze: true,
    publicPath: '/assets/',
    extractCSS: true,
    splitChunks: {
      layouts: false,
    },
    optimization: {
      splitChunks: {
        name: true,
      },
      runtimeChunk: false,
    },
    babel: {
      'env': {
        'production': {
          'plugins': ['transform-remove-console'],
        },
      },
    },

    // Run ESLint on save
    extend(config, { isDev }) {
      if (isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
