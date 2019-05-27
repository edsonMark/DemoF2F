
/**
* Page object file
*/

//FLEET-723 - Search: Create search results page //

'use strict';

class resultPage {

  static get imgBookIcon () {
    return element(by.css('.icon-ebooks'));
  }

  static get  btnShowMore () {
    return element(by.css('[ng-click="getMoreProducts()"]'));
  }

  static get eleProductWidgets () {
    return element.all(by.css('.product-widget'));
  }

  static get eleMusicProductWidget () {
    return element.all(by.css('.music-product-widget'));
  }
}

module.exports = resultPage;
