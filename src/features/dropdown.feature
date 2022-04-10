Feature: The dropdown feature

  Scenario: As a user, I can select any value in a dropdown
    Given I am on the dropdown page
    When I select 1 dropdown option
    Then I should see 1 option with text Option 1 is selected
    When I select 2 dropdown option
    Then I should see 2 option with text Option 2 is selected
    When I refresh the page
    Then I should see the default option is selected
