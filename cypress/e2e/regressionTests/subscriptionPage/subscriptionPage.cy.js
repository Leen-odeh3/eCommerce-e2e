///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Shared from '../../../pageObjects/shared/assertions.cy';
import subscriptionActions from '../../../pageObjects/subscriptionPage/actions.cy';
import subscriptionAssertions from '../../../pageObjects/subscriptionPage/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
var shared = new Shared()
var action = new subscriptionActions()
var assertion = new subscriptionAssertions()
var actionShared= new SharedActions()

Given('Navigate to website', () => {
    actionShared.visitPage("/")
});

Then('Verify that home page is visible successfully', () => {
    shared.verifyUserInPage("/")
});

When('Scroll down to footer', () => {
    action.scrollToFooter()
});

Then('Verify text {string}', (word) => {
    assertion.verifyTextShow(word)
});

Then('Enter email address in input and click arrow button', () => {
    action.enterEmail()
});

Then("Verify success message 'You have been successfully subscribed!' is visible", () => {
    assertion.showSuccessMessage()
});

Then("Click on cart link", () => {
    action.clickOnCartLink()
})

And('Verify that cart page is visible successfully', () => {
    shared.verifyUserInPage("/view_cart")
});

