module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'class-methods-use-this': 'off',
    'no-useless-return': 'off',
    'react/state-in-constructor': 'off',
    'comma-dangle': 'off',
    'react/jsx-indent-props': 'off',
    'react/no-unused-state': 'off',
    'array-bracket-spacing': 'off',
    'keyword-spacing': 'off',
    'space-before-blocks': 'off',
    'arrow-parens': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'react/no-array-index-key': 'off',
    'no-shadow': 'off',
    'react/require-default-props': 'off'
  },
};
