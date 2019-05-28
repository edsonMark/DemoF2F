
/**
* Page object file
*/

'use strict';

class searchBox {

  static searchWord(test) { //test = any search criteria.
    this.txtSearchBox.clear();
    this.txtSearchBox.sendKeys(test);
  }

  static get btnSearchBox () {
    return element(by.id('searchButton'));
  }


  static get btnViewMore () {
    return element.all(by.css('.clearfix .show-more'));
  }


  static get txtMainSearchBox () {
    return element(by.css('[ng-model="search.query"]'));
  }


  static get txtSearchBox () {
    return element(by.id('searchButton'));
  }

  static Search (searchword) {
    this.txtSearchBox.sendKeys(searchword);
  }

  static goMainSearch (searchword) {
    this.txtMainSearchBox.sendKeys(searchword);
  }


  static searchWord(test) { //test = any search criteria.
    this.txtSearchBox.clear();
    this.txtSearchBox.sendKeys(test);
  }


}

module.exports = searchBox;
