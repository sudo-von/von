/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['text'],
  displayName: { name: 'details', color: 'green' },
  testMatch: [
    "<rootDir>/tests/**/*.unit-test.ts",
    "<rootDir>/tests/**/*.integration-test.ts"
  ],
};
