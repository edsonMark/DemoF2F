//protractor.conf.js
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 5000000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      '/Users/edson/Desktop/Projects/Demos/DemoF2F/Search/tests/features/Search/search.feature'
    ],
  
    baseURL: 'http://localhost:8080/',
  
    cucumberOpts: {
      require: 'features/step_definition/*.js',
      tags: false,
      format: '',
      profile: false,
      'no-source': true
    },
  };