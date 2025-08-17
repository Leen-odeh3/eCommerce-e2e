///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginUserActions from '../../../pageObjects/loginUser/actions.cy';
import loginUserAssertions from '../../../pageObjects/loginUser/assertion.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const action = new loginUserActions();
const assertion = new loginUserAssertions()
const assertionShared = new Shared();
const actionShared = new SharedActions()

Given("I am on the login page", () => {
  actionShared.visitPage("/login")
  assertionShared.verifyUserInPage("/login");
});

When("I enter valid login credentials", () => {
  action.enterValidCredentials();
});

When("I enter an invalid email and valid password", () => {
  action.enterInvalidEmailAndValidPassword();
});

When("I enter a valid email and incorrect password", () => {
  action.enterValidEmailAndInvalidPassword();
});

When("I click the 'Login' button", () => {
  action.clickLoginButton();
});

Then("I should be redirected to mainPage", () => {
  assertionShared.verifyUserInPage("/");
  assertionShared.verifyLogoutAndDeleteAccount();
});

Then("I should see the error message {string}", (errorMessage) => {
  assertion.verifyErrorMessage("Your email or password is incorrect!")
});
