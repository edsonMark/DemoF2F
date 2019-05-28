const {Given,When,And,Then} = require('cucumber');
const Search = require ('/Users/edson/Desktop/Projects/Demos/DemoF2F/Search/pageObjects/searchBox.js');


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
  
  Given('I am on the game website', function () {
    browser.get('https://www.game.co.uk/');
    browser.pause();
    expect('https://www.game.co.uk/').to.equal('https://www.game.co.uk/');
  });

  When('I enter a partial search term', function () {
    Search.Search('red dead');
  });

  // When('I click the Search', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });


  // Then('I should be able to see results', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });
