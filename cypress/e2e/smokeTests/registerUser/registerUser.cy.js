///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy';
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

Given("I am on the home page", () => {
  SharedActions.visitPage("/")
  Shared.verifyUserInPage('/')
});

//@smoke
When("I click on the 'Signup / Login' button", (element, btnText) => {
  RegisterUserActions.clickOnSignUp("a", "Signup / Login")
  Shared.verifyUserInPage('/login')
});

When("I enter a new name and a valid email address", () => {
  RegisterUserActions.enterName()
  RegisterUserActions.enterValidEmail()
});

When("I click the 'Signup' button", (element, btnText) => { 
  RegisterUserActions.clickOnSignUp("button", 'Signup')
});

When("I fill all required registration details", () => {
  cy.wait(1000)
  RegisterUserAssertions.showMessage("h2","Enter Account Information");
  RegisterUserActions.enterAdditionalDetails()
});

When("I click the 'Create Account' button", () => {
  RegisterUserActions.submitRegistration()
  cy.wait(1000)
});

Then("I should see the message {string}", (tag, message) => {
  RegisterUserAssertions.showMessage("h2", "Account Created!")
  RegisterUserAssertions.showMessage("p", "Congratulations! Your new account has been successfully created!")
});

Then("I click the 'Continue' button", (ele, text) => {
  RegisterUserActions.clickOnSignUp("a", "Continue")
});

Then("I should be logged in as the new user", (tag, message) => {
Shared.verifyLogoutAndDeleteAccount();
});

//@regression

When("I enter a name and an existing email address", () => {
  RegisterUserActions.enterName();
  RegisterUserActions.registerWithExistingEmail();
});

Then("I should see the error message {string}", (errorMessage) => {
  console.log(errorMessage)
  RegisterUserAssertions.showMessage("p", errorMessage, { timeout: 10000 });
});

When("I enter a new name and an invalid email address", () => {
  RegisterUserActions.enterInvalidEmail()
});

Then("should see the error message {string}", (errorMessage) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain("please include an '@' in the email address.");
  });
});

