
/**
* Page object file
*/

//FLEET-411 - Create search result widget //

'use strict';

class searchBox {

  static searchWord(test) { //test = any search criteria.
    this.txtSearchBox.clear();
    this.txtSearchBox.sendKeys(test);
  }

  static get btnSearchBox () {
    return element(by.css('[ng-model="search.query"]'));
  }


  static get btnViewMore () {
    return element.all(by.css('.clearfix .show-more'));
  }


  static get txtMainSearchBox () {
    return element(by.css('[ng-model="search.query"]'));
  }


  static get txtSearchBox () {
    return element(by.css('[ng-model="search.query"]'));
  }

}

module.exports = searchBox;
