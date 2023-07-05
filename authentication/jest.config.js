/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['text'],
  displayName: { name: 'authentication', color: 'blue' },
  testMatch: [
    "<rootDir>/tests/**/*.test.ts",
    "<rootDir>/tests/**/*.unit-test.ts",
    "<rootDir>/tests/**/*.integration-test.ts"
  ],
};
