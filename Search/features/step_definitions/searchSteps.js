var search = require('../pages/searchPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	browser.ignoreSynchronization = true

	Given('I search for item "Red Dead', function (name, done) {
		search.searchBox.sendKeys(name);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		done();
		
	  });

	Then('I select a filter', function(done){
		search.filterGenre.click();
		search.selectFilter.click();
	  });

});

