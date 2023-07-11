module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb-typescript/base'],
  parserOptions: { project: './tsconfig.eslint.json', tsconfigRootDir: __dirname },
  rules: {
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  "ignorePatterns": [".eslintrc.js", "jest.config.js"],
};
