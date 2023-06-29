/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  ignorePatterns: ['tests'],
  coverageReporters: ['text'],
  displayName: { name: 'details', color: 'green' },
};
