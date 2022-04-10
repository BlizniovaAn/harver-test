Feature: The hover feature

  Scenario Outline: As a user, I can get more info about user when I hover over an icon
    Given I am on the hovers page
    When I hover over <number> icon
    Then I should see for <number> user <name> and <link> appear

    Examples:
    | number | name        | link     |
    | 0      | name: user1 | /users/1 |
    | 1      | name: user2 | /users/2 |
    | 2      | name: user3 | /users/3 |
