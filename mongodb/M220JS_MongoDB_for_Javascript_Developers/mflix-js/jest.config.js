module.exports = {
  roots: ["test"],
  globalSetup: "./test/config/setup.js",
  globalTeardown: "./test/config/teardown.js",
  testEnvironment: "./test/config/mongoEnvironment",
  testRegex: "./test/.*.js$",
}
