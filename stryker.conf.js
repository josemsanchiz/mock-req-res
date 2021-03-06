module.exports = function (config) {
  config.set({
    maxConcurrentTestRunners: 2, // to stop it crapping out on ci
    mutate: ['src/**/*.js', '!src/index.js'],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text'],
    testRunner: 'mocha',
    mochaOptions: {
      spec: ['./test/unit/**/*.test.js'],
      require: ['./test/unitTestHelper.js']
    },
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    thresholds: { high: 80, low: 70, break: null }
  })
}
