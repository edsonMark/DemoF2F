Feature: Search For a Product
  As a customer
  I should be able to search for a Product using a partial term

  Scenario: Search using partial words
    Given I am on the game website
    And I click on the search box
    When I enter a partial search term
    And I click the Search 
    Then I should be able to see results