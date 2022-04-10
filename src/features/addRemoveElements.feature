Feature: The add/remove elements feature

  Scenario: As a user, I can add new elements to the page
    Given I am on the add remove elements page
    When I add a new element
    Then I should see the new element has been added

  Scenario: As a user, I can remove elements from the page
    Given I am on the add remove elements page
    And New element has been added
    When I remove the element
    Then I should see the element has been removed
