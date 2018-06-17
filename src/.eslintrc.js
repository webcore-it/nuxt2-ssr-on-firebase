module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // Allow async/await with version 8.
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
  ],
  // Custom rules
  rules: {
    'no-console': 'off',
  },
  // In the store, allow empty-pattern for the actions functions.
  overrides: {
    files: ['store/*.js'],
    rules: {
      'no-empty-pattern': 'off',
    },
  }
};
