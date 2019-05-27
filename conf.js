// conf.js
// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'E2E-report.html',
//   reportTitle: 'E2E report',
//   reportOnlyFailedSpecs: true,
//   captureOnlyFailedSpecs: true,
//   cleanDestination: true,
//   showSummary: true,
//   showQuickLinks: true
// });

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  specs: [
      '/Users/edson/Desktop/Projects/Demos/DemoF2F/Search/Tests/features/Search.feature'     // Specs here are the cucumber feature files
  ],
  // cucumber command line options
  cucumberOpts: {
      'no-colors': true,
      require: ['/Users/edson/Desktop/Projects/Demos/DemoF2F/Search/steps/step_definitions.js'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      format: [],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      dryRun: false,                 // <boolean> invoke formatters without executing steps
      compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      failFast: true
  },
};