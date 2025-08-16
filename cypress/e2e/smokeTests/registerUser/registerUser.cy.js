///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy';
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';

const action = new RegisterUserActions()
const assertion = new RegisterUserAssertions()
const assertionShared = new Shared()

// Background
Given("I am on the home page", () => {
  action.visiteHomePage()
  assertionShared.verifyUserInPage('/')
});

// Scenario 1: Successful user registration
//@smoke
When("I click on the 'Signup / Login' button", (element, btnText) => {
  action.clickOnSignUp("a", "Signup / Login")
  assertionShared.verifyUserInPage('/login')
});

When("I enter a new name and a valid email address", () => {
  action.enterName()
  action.enterValidEmail()
});

When("I click the 'Signup' button", (element, btnText) => {
  action.clickOnSignUp("button", 'Signup')
});

When("I fill all required registration details", () => {
  cy.wait(1000)
  assertion.verifyInRegPage("Enter Account Information");
  action.enterAdditionalDetails()
});

When("I click the 'Create Account' button", () => {
  action.submitRegistration()
  cy.wait(1000)
});

Then("I should see the message {string}", (tag, message) => {
  assertion.showMessage("h2", "Account Created!")
  assertion.showMessage("p", "Congratulations! Your new account has been successfully created!")
});

Then("I click the 'Continue' button", (ele, text) => {
  action.clickOnSignUp("a", "Continue")
});

Then("I should be logged in as the new user", (tag, message) => {
  assertion.showMessage("a", "Logout")
  assertion.showMessage("a", "Delete Account")
  assertion.showMessage("a", "Logged in as")
});

// Scenario 2: Register with an existing email
//@regression

When("I enter a name and an existing email address", () => {
  action.enterName();
  action.registerWithExistingEmail();
});

Then("I should see the error message {string}", (errorMessage) => {
  assertion.showMessage("p", errorMessage);
});

When("I enter a new name and an invalid email address", () => {
  action.enterInvalidEmail()
});

Then("should see the error message {string}", (errorMessage) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain("please include an '@' in the email address.");
  });
});

