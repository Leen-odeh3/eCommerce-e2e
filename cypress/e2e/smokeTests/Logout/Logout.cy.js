///<reference types="cypress"/>
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import loginUserActions from "../../../pageObjects/loginUser/actions.cy"
import Shared from '../../../pageObjects/shared/assertions.cy';
import Logout from '../../../pageObjects/Logout/actions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

Given("I launch the browser and navigate to login page", () => {
SharedActions.visitPage("/login")
});

Then("I should see the login page", () => {
Shared.verifyUserInPage("/login")
});

When("I enter correct email address and password", () => {
loginUserActions.enterValidCredentials()
});

And("I click login button", () => {
loginUserActions.clickLoginButton()
});

Then("I should see Logged in as username is visible", () => {
Shared.verifyLogoutAndDeleteAccount()
});

When("I click Logout button", () => {
Logout.deleteAccount()
});

Then("I should be nevigated to login page", () => {
SharedActions.visitPage("/login")
});