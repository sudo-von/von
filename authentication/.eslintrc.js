module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb",
    "airbnb-typescript/base"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "no-console": "off",
    "import/no-extraneous-dependencies": "off"
  },
  "ignorePatterns": [".eslintrc.js"],
}