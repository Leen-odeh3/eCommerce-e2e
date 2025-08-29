///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginUserActions from '../../../pageObjects/loginUser/actions.cy';
import loginUserAssertions from '../../../pageObjects/loginUser/assertion.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';


Given("I am on the login page", () => {
  SharedActions.visitPage("/login")
  Shared.verifyUserInPage("/login");
});

When("I enter valid login credentials", () => {
  loginUserActions.enterValidCredentials();
});

When("I enter an invalid email and valid password", () => {
  loginUserActions.enterInvalidEmailAndValidPassword();
});

When("I enter a valid email and incorrect password", () => {
  loginUserActions.enterValidEmailAndInvalidPassword();
});

When("I click the 'Login' button", () => {
  loginUserActions.clickLoginButton();
});

Then("I should be redirected to mainPage", () => {
  Shared.verifyUserInPage("/");
  Shared.verifyLogoutAndDeleteAccount();
});

Then("I should see the error message {string}", (errorMessage) => {
  loginUserAssertions.verifyErrorMessage("Your email or password is incorrect!")
});
