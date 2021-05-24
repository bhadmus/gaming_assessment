import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import RollDice from "../../support/DicePage/TestDice";
const gameDice = new RollDice()

Given(/^I am on the game page$/, function () {

    cy.visit('/')

});
When(/^I click the "([^"]*)" button$/, function (button) {
    cy.fixture('variables').then(function (vas){
    switch (button){
        case "roll dice":
            gameDice.clickAnElement(vas.rollDiceBtn);
            break
        case "plus ten":
            gameDice.clickAnElement(vas.plusTen);
            break
        case "plus one":
            gameDice.clickAnElement(vas.plusOne);
            break
        case "double":
            gameDice.clickAnElement(vas.makeDouble);
            break
        case "half":
            gameDice.clickAnElement(vas.byHalf);
            break
        case "spray":
            gameDice.clickAnElement(vas.sprayButton);
            break
        case "auto":
            gameDice.clickAnElement(vas.autoButton);
            break
        case "slow roll":
            gameDice.clickAnElement(vas.slowRollButton);


    }
    })

});
Then(/^I should see the login popup$/, function () {
    cy.fixture('variables').then(function (vas){
    gameDice.viewTextofAnElement(vas.signInModal, vas.signInText);

    })

});
Then(/^The profit on win should increase by "([^"]*)"$/, function (number) {
    cy.fixture('variables').then(function (vas){
    switch (number){
        case "one":
            gameDice.viewTextofAnElement(vas.stakedAmount, '2.00');
            break
        case "ten":
            gameDice.viewTextofAnElement(vas.stakedAmount, '11.00');

    }
    })
});
Then(/^The profit on win should be "([^"]*)"$/, function (number) {
    cy.fixture('variables').then(function (vas){
    switch (number){
        case "doubled":
            gameDice.viewTextofAnElement(vas.stakedAmount, '2.00');
            break
        case "halved":
            gameDice.viewTextofAnElement(vas.stakedAmount, '0.50');
            break
        case "updated":
            gameDice.viewTextofAnElement(vas.stakedAmount, '189.00')

    }
    })
});
Then(/^The "([^"]*)" should be visible$/, function (element) {
    cy.fixture('variables').then(function (vas){
    switch (element){
        case "rolls record field":
            gameDice.waitToSeeElement(vas.rollsCount);
            break
        case "speed slider":
            gameDice.waitToSeeElement(vas.speedSlider);
            break
        case "roll meter":
            gameDice.waitToSeeElement(vas.rollMeter);
    }

    })
});
When(/^I insert a new value into "([^"]*)" text box$/, function () {
    cy.fixture('variables').then(function (vas){
    gameDice.clearValue(vas.winChance)
    gameDice.insertAValue(vas.winChance, '0.5');
    })
});