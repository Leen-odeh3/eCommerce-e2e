import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import addProductActions from '../../../pageObjects/addProduct/actions.cy'
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy';
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import checkoutAction from '../../../pageObjects/checkout/actions.cy';
import checkoutAssertion from '../../../pageObjects/checkout/assertion.cy'

const action= new SharedActions()
const assertion = new Shared()
const Prod_action= new addProductActions()
const reg_action= new RegisterUserActions()
const reg_assertion= new RegisterUserAssertions()
const checkout_action= new checkoutAction()
const checkout_assertion =new checkoutAssertion()

Given("I navigate to website", () => {
    action.visitPage("/")
});

Given("I verify that the home page is visible successfully", () => {
assertion.verifyUserInPage("/")
});

When("I add products to the cart {string}", (num) => {
Prod_action.clickAddToCart(num)
});

When("I click on the 'View Cart' button", () => {
      action.clickToLink("a","View Cart")
});

Then("I should see the cart page displayed", () => {
assertion.verifyUserInPage("/view_cart")
});

When("I click on 'Proceed To Checkout' button", () => {
    assertion.VerifyIsVisible("a","Proceed To Checkout");
    cy.wait(2000)
});

When("I click on 'Register / Login' button", () => {
    action.clickToLink("a","Register / Login")
});

When("I fill all details in Signup and create an account", () => {
  reg_action.enterName()
  reg_action.enterValidEmail()
  reg_action.clickOnSignUp("button", 'Signup')
  cy.wait(1000)
  reg_assertion.verifyInRegPage("Enter Account Information");
  reg_action.enterAdditionalDetails()
  reg_action.clickOnSignUp("button", 'Create Account')
});

Then("I should see the message 'ACCOUNT CREATED!' and click the 'Continue' button", () => {
    reg_assertion.showMessage("h2", "Account Created!")
    reg_assertion.showMessage("p", "Congratulations! Your new account has been successfully created!")
});

When("I click on the Cart button", () => {
    action.clickToLink("a","Cart")
});

When("I enter a description in the comment text area and click 'Place Order'", () => {
   checkout_action.addTextInBox()
   action.clickToLink("a","Place Order")
});

When("I enter payment details: Name on Card, Card Number, CVC, Expiration Date", () => {
  checkout_action.enterPaymentDetails();
});

When("I click 'Pay and Confirm Order' button", () => {
  checkout_action.clickPayAndConfirm();
});

Then("I should see the success message 'Your order has been placed successfully!'", () => {
  checkout_assertion.verifySuccessMessage();
});