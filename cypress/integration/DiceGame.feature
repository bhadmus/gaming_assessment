# Created by Ademola Bhadmus on 24.05.2021

Feature: An exercise to carry out possible test scenarios on the test page

  Background:
    Given I am on the game page

  Scenario: A user that isn't logged in cannot roll dice
    When I click the "plus ten" button
    And I click the "roll dice" button
    Then I should see the login popup

  Scenario: A user should be able to add one to the staked amount
    When I click the "plus one" button
    Then The profit on win should increase by "one"

  Scenario: A user should be able to add ten to the staked amount
    When I click the "plus ten" button
    Then The profit on win should increase by "ten"

  Scenario: A user should be able to double the staked amount
    When I click the "double" button
    Then The profit on win should be "doubled"

  Scenario: A user should be able to split the staked amount
    When I click the "half" button
    Then The profit on win should be "halved"

  Scenario: A user should be able to see the number of rolls when spray button is clicked
    When I click the "spray" button
    Then The "rolls record field" should be visible

  Scenario: A user should be able to see the speed slider when auto button is clicked
    When I click the "auto" button
    Then The "speed slider" should be visible

  Scenario: A user should be able to see the roll meter when slow roll button is clicked
    When I click the "slow roll" button
    Then The "roll meter" should be visible

  Scenario: Other inputs are updated when one input is updated
    When I insert a new value into "win chance" text box
    Then The profit on win should be "updated"