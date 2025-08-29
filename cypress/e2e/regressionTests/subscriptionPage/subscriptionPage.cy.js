///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Shared from '../../../pageObjects/shared/assertions.cy';
import subscriptionActions from '../../../pageObjects/subscriptionPage/actions.cy';
import subscriptionAssertions from '../../../pageObjects/subscriptionPage/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

Given('Navigate to website', () => {
    SharedActions.visitPage("/")
});

Then('Verify that home page is visible successfully', () => {
    Shared.verifyUserInPage("/")
});

When('Scroll down to footer', () => {
    subscriptionActions.scrollToFooter()
});

Then('Verify text {string}', (word) => {
    subscriptionAssertions.verifyTextShow(word)
});

Then('Enter email address in input and click arrow button', () => {
    subscriptionActions.enterEmail()
});

Then("Verify success message 'You have been successfully subscribed!' is visible", () => {
    subscriptionAssertions.showSuccessMessage()
});

Then("Click on cart link", () => {
    subscriptionActions.clickOnCartLink()
})

And('Verify that cart page is visible successfully', () => {
    Shared.verifyUserInPage("/view_cart")
});

