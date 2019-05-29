// Page class for search page

var SearchPage = function() {

	this.searchBox = element(by.id('search'));
	this.filterGenre = element(by.css('.collapsible.genre'));
	this.selectFilter = element.all(by.css('.filters.content:nth-child(2)'));
	
};

module.exports = new SearchPage();
