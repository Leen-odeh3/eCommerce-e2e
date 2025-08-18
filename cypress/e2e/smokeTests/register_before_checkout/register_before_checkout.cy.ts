///<reference types="cypress"/>
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy'
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import addProductActions from '../../../pageObjects/addProduct/actions.cy';
import checkoutAction from '../../../pageObjects/checkout/actions.cy';
import checkoutAssertion from '../../../pageObjects/checkout/assertion.cy';

const checkout_assertion =new checkoutAssertion()
const actionShared= new SharedActions()
const assertionShared = new Shared()
const action= new RegisterUserActions()
const assertion = new RegisterUserAssertions()
const prod_action= new addProductActions()
const checkout_action= new checkoutAction()

Given("Navigate to website", () => {
actionShared.visitPage("/")
});

Then("I should see the home page successfully", () => {
assertionShared.VerifyIsVisible("/")
});

When("I click the 'Signup / Login' button", () => {
actionShared.clickToLink("a","Signup / Login")
});

And("I fill in all required signup details and create an account", () => {
  action.enterName()
  action.enterValidEmail()
  action.clickOnSignUp("button", 'Signup')
  cy.wait(1000)
  assertion.verifyInRegPage("Enter Account Information");
  action.enterAdditionalDetails()
  action.clickOnSignUp("button", 'Create Account')
});

Then("I should see 'ACCOUNT CREATED!' message", () => {
 assertion.showMessage("h2", "Account Created!")
 assertion.showMessage("p", "Congratulations! Your new account has been successfully created!")
});

And("I click the 'Continue' button", () => {
action.clickOnSignUp("a", "Continue")
});

When("I add products to the cart", () => {
prod_action.clickAddToCart()
});

And("I click the 'Cart' Page", () => {
actionShared.clickToLink("a","Cart")
});

Then("I should see the cart page", () => {
assertionShared.verifyUserInPage("/view_cart")
});

When("I click 'Proceed To Checkout'", () => {
assertionShared.VerifyIsVisible("a","Proceed To Checkout");
    cy.wait(2000)
});

When("I enter a description in the comment text area", () => {
  checkout_action.addTextInBox()
   actionShared.clickToLink("a","Place Order")
});

And("I click the 'Place Order' button", () => {
 checkout_action.addTextInBox()
   actionShared.clickToLink("a","Place Order")
});

And("I enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
  checkout_action.enterPaymentDetails();
});

And("I click the 'Pay and Confirm Order' button", () => {
  checkout_action.clickPayAndConfirm();
});

Then("I should see the success message 'Your order has been placed successfully!'", () => {
  checkout_assertion.verifySuccessMessage();
});

// When("I click the 'Delete Account' button", () => {

// });

// Then("I should see 'ACCOUNT DELETED!' message", () => {

// });

// When("I click the 'Continue' button", () => {

// });
