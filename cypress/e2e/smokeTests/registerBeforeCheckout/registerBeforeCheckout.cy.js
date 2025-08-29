///<reference types="cypress"/>
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy'
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import addProductActions from '../../../pageObjects/addProduct/actions.cy';
import checkoutAction from '../../../pageObjects/checkout/actions.cy';
import checkoutAssertion from '../../../pageObjects/checkout/assertion.cy';
import CheckoutDIActions from '../../../pageObjects/download_invoice/actions.cy';


Given("Navigate to website", () => {
SharedActions.visitPage("/")
});

Then("I should see the home page successfully", () => {
Shared.VerifyIsVisible("/")
});

When("I click the 'Signup / Login' button", () => {
SharedActions.clickToLink("a","Signup / Login")
});

And("I fill in all required signup details and create an account", () => {
  RegisterUserActions.enterName()
  RegisterUserActions.enterValidEmail()
  RegisterUserActions.clickOnSignUp("button", 'Signup')
  cy.wait(1000)
  RegisterUserAssertions.showMessage("h2","Enter Account Information");
  RegisterUserActions.enterAdditionalDetails()
  RegisterUserActions.clickOnSignUp("button", 'Create Account')
  RegisterUserActions.clickOnSignUp("a", 'Continue')
});

// Then("I should see 'ACCOUNT CREATED!' message", () => {
//  RegisterUserAssertions.showMessage("h2", "Account Created!")
//  RegisterUserAssertions.showMessage("p", "Congratulations! Your new account has been successfully created!")
// });

When("I add products to the cart", () => {
addProductActions.clickAddToCart()
});

And("I click the 'Cart' Page", () => {
SharedActions.clickToLink("a","Cart")
});

Then("I should see the cart page", () => {
Shared.verifyUserInPage("/view_cart")
});

When("I click 'Proceed To Checkout'", () => {
Shared.VerifyIsVisible("a","Proceed To Checkout");
    cy.wait(2000)
});

When("I enter a description in the comment text area", () => {
  checkoutAction.addTextInBox()
   SharedActions.clickToLink("a","Place Order")
});

// And("I click the 'Place Order' button", () => {
// //  checkout_action.addTextInBox()
//    actionShared.clickToLink("a","Place Order")
// });

And("I enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
  checkoutAction.enterPaymentDetails();
});

And("I click the 'Pay and Confirm Order' button", () => {
  CheckoutDIActions.payAndConfirm();
});

Then("I should see the success message 'Your order has been placed successfully!'", () => {
  checkoutAssertion.verifySuccessMessage();
});

// When("I click the 'Delete Account' button", () => {

// });

// Then("I should see 'ACCOUNT DELETED!' message", () => {

// });

// When("I click the 'Continue' button", () => {

// });
