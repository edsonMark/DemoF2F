Feature: Search on Game website
    As a user
    I should be able to search for an item in Game
    So that I can see relevant items for my search
        
    Scenario: Search Test in Game
        Given I search for item "Red Dead"
        And I select a filter
        When Filter is applied
        And I select a Product
        Then I should be Navigate to Pdp page
        

        