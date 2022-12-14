/* eslint-disable func-names */

module.exports = function(config) {
  const karmaConfig = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],
    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/reflect-metadata/Reflect.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/proxy.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/sync-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/fake-async-test.js', watched: false },
      { pattern: './src/**/*.ts' },
    ],
    // list of files to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { '**/*.ts': ['karma-typescript'] },
    karmaTypescriptConfig: {
      include: ['./src/**/*.ts'],
      compilerOptions: { lib: ['es2017', 'dom'] },
      reports: {
        cobertura: {
          directory: './coverage',
          filename: 'cobertura-coverage.xml',
          subdirectory: './',
        },
        text: '',
      },
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'karma-typescript'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  };

  if (process.env.testEnv && process.env.testEnv === 'ci') {
    karmaConfig.browsers = ['ChromeHeadless'];
    karmaConfig.singleRun = true;
  }

  config.set(karmaConfig);
};
