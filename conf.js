//protractor.conf.js
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 5000000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // browser to launch tests
	capabilities : {
		browserName : 'chrome',
		chromeOptions : {
			args : [ '--disable-extensions', ]
		}
	},

	// Specify Test Files
	//
	// Define which tests should execute
	specs : [ 
	          'Search/features/*.feature'
	       ],

	//Define which tests should be excluded from execution.
	exclude : [
	          // 'features/search.feature'
			],

	// Set log level and enables colors for log output
	logLevel : 'verbose',
	coloredLogs : true,

	// arguments to cucumber.js
	cucumberOpts : {
		require : [ 
		            'Search/features/support/env.js', 
		            'Search/features/support/hooks.js',
		            'Search/features/step_definitions/searchSteps.js'
		],
		tags : false,
		format : '',
		profile : false,
		'no-source' : true
	}
	
};
