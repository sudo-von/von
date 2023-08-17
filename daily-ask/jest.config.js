/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['text'],
  displayName: { name: 'daily-ask', color: 'blue' },
  testMatch: [
    "<rootDir>/tests/**/*.unit.test.ts"
  ],
};
