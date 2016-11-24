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
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Register/RegisterSpec.js']
}
