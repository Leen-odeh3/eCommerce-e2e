///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import loginUserActions from "../../../pageObjects/loginUser/actions.cy"
import Shared from '../../../pageObjects/shared/assertions.cy';
import Logout from '../../../pageObjects/Logout/actions.cy';

const actionlogin = new loginUserActions()
const assertionShared= new Shared()
const action= new Logout()

Given("I launch the browser and navigate to login page", () => {
actionlogin.visitLoginPage()
});

Then("I should see the login page", () => {
assertionShared.verifyUserInPage("/login")
});

When("I enter correct email address and password", () => {
   actionlogin.enterValidCredentials()
});

And("I click login button", () => {
actionlogin.clickLoginButton()
});

Then("I should see Logged in as username is visible", () => {
assertionShared.verifyLogoutAndDeleteAccount()
});

When("I click Logout button", () => {
action.deleteAccount()
});

Then("I should be nevigated to login page", () => {
actionlogin.visitLoginPage()
});