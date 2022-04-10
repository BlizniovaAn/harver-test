Feature: The keys feature

  Scenario Outline: As a user, I can press any key and see the text on the page
    Given I am on the keys page
    When I click <key>
    Then I should see text <result text> appears on the page

    Examples:
    | key      | result text        |
    | Enter    | You entered: ENTER |
    | Space    | You entered: SPACE |
    | Escape   | You entered: ESCAPE|
