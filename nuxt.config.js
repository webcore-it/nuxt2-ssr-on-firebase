require('dotenv').config();

module.exports = {
  // ======================================================================
  // Basics
  // ======================================================================
  mode: 'universal',
  srcDir: 'src/',

  // ======================================================================
  // Set head section of the page.
  // ======================================================================
  head: {
    title: 'Nuxt.js 2.x ssr app on Google Firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Example for hosting a Nuxt.js 2.x SSR app on Google Firebase.',
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
    ['@nuxtjs/axios', {
      baseURL: process.env.API_BASE_URL,
      browserBaseURL: process.env.API_BASE_URL,
    }],

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
    { src: '~/plugins/firebase', ssr: true },
  ],

  // ======================================================================
  // Map system env props to internal env. (https://nuxtjs.org/api/configuration-env)
  // You need to create a .env file in the same folder as this nuxt.config.js
  // to set your local env variables.
  // ======================================================================
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt2-example-dev.firebaseapp.com',
    apiBaseUrl: process.env.API_BASE_URL || 'https://nuxt2-example-dev.firebaseapp.com',
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
  buildDir: process.env.BUILD_DIR || './functions/.nuxt',
  build: {
    analyze: process.env.ENABLE_ANALYZE_MODE === 'true', // env variables are strings
    publicPath: '/assets/',
    extractCSS: true,

    babel: {
      'env': {
        'production': {
          'plugins': [],
        },
      },
    },

    // Extend webpack config
    extend(config, { isServer, isDev }) {},
  },
};
