module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
};
