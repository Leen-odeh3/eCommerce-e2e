///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import scrollAction from '../../../pageObjects/scroll/actions.cy';
import scrollAssertion from '../../../pageObjects/scroll/assertions.cy';


var shared = new Shared()
var actionShared= new SharedActions()
var action= new scrollAction()
var assertion = new scrollAssertion()


Given('Navigate to website', () => {
actionShared.visitPage("/")
});

Then('I verify that home page is visible successfully', () => {
shared.verifyUserInPage("/")
});

When('I scroll down the page to the bottom', () => {
  action.scrollToFooter()
});

Then("I verify 'SUBSCRIPTION' is visible", () => {
  assertion.verifySubShow()
});

When('I click on the scroll up arrow button at the bottom right', () => {
  action.clickScrollUpArrow()
});

When('I manually scroll up the page to the top', () => {
  action.manualScrollToTop();
  action.scrollToTop();
});

Then('I verify that the page is scrolled up and \'Full-Fledged practice website for Automation Engineers\' text is visible on screen', () => {
  assertion.verifySubShow();
  assertion.verifyPageScrolledToTop();
  assertion.verifyFullFledgedTextVisible();
});
