/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: [
    "**/tests/**/*.test.[jt]s?(x)"
  ]
};