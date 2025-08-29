///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import scrollAction from '../../../pageObjects/scroll/actions.cy';
import scrollAssertion from '../../../pageObjects/scroll/assertions.cy';


Given('Navigate to website', () => {
SharedActions.visitPage("/")
});

Then('I verify that home page is visible successfully', () => {
Shared.verifyUserInPage("/")
});

When('I scroll down the page to the bottom', () => {
  scrollAction.scrollToFooter()
});

Then("I verify 'SUBSCRIPTION' is visible", () => {
  scrollAssertion.verifySubShow()
});

When('I click on the scroll up arrow button at the bottom right', () => {
  scrollAction.clickScrollUpArrow()
});

When('I manually scroll up the page to the top', () => {
  scrollAction.manualScrollToTop();
  scrollAction.scrollToTop();
});

Then('I verify that the page is scrolled up and \'Full-Fledged practice website for Automation Engineers\' text is visible on screen', () => {
  scrollAssertion.verifySubShow();
  scrollAssertion.verifyPageScrolledToTop();
  scrollAssertion.verifyFullFledgedTextVisible();
});
