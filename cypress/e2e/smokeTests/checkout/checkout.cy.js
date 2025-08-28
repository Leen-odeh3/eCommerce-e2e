import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import addProductActions from '../../../pageObjects/addProduct/actions.cy'
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy';
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import checkoutAction from '../../../pageObjects/checkout/actions.cy';
import checkoutAssertion from '../../../pageObjects/checkout/assertion.cy'


Given("I navigate to website", () => {
    SharedActions.visitPage("/")
});

Given("I verify that the home page is visible successfully", () => {
Shared.verifyUserInPage("/")
});

When("I add products to the cart {string}", (num) => {
addProductActions.clickAddToCart(num)
});

When("I click on the 'View Cart' button", () => {
      SharedActions.clickToLink("a","View Cart")
});

Then("I should see the cart page displayed", () => {
Shared.verifyUserInPage("/view_cart")
});

When("I click on 'Proceed To Checkout' button", () => {
    Shared.VerifyIsVisible("a","Proceed To Checkout");
    cy.wait(2000)
});

When("I click on 'Register / Login' button", () => {
    SharedActions.clickToLink("a","Register / Login")
});

When("I fill all details in Signup and create an account", () => {
  RegisterUserActions.enterName()
  RegisterUserActions.enterValidEmail()
  RegisterUserActions.clickOnSignUp("button", 'Signup')
  cy.wait(1000)
  RegisterUserAssertions.verifyInRegPage("Enter Account Information");
  RegisterUserActions.enterAdditionalDetails()
  RegisterUserActions.clickOnSignUp("button", 'Create Account')
});

Then("I should see the message 'ACCOUNT CREATED!' and click the 'Continue' button", () => {
    RegisterUserAssertions.showMessage("h2", "Account Created!")
    RegisterUserAssertions.showMessage("p", "Congratulations! Your new account has been successfully created!")
});

When("I click on the Cart button", () => {
    SharedActions.clickToLink("a","Cart")
});

When("I enter a description in the comment text area and click 'Place Order'", () => {
   checkout_action.addTextInBox()
   SharedActions.clickToLink("a","Place Order")
});

When("I enter payment details: Name on Card, Card Number, CVC, Expiration Date", () => {
  checkout_action.enterPaymentDetails();
});

When("I click 'Pay and Confirm Order' button", () => {
  checkout_action.clickPayAndConfirm();
});

Then("I should see the success message 'Your order has been placed successfully!'", () => {
  checkoutAssertion.verifySuccessMessage();
});