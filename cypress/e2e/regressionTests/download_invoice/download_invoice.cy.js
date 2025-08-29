import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import SharedAssertions from '../../../pageObjects/shared/assertions.cy';
import addProductActions from '../../../pageObjects/addProduct/actions.cy';
import RegisterUserActions from '../../../pageObjects/registerUser/actions.cy';
import RegisterUserAssertions from '../../../pageObjects/registerUser/assertions.cy';
import CheckoutActions from '../../../pageObjects/checkout/actions.cy';
import CheckoutDIActions from '../../../pageObjects/download_invoice/actions.cy';
import CheckoutDIAssertions from '../../../pageObjects/download_invoice/assertions.cy';


Given("I open the Automation Exercise home page", () => {
  SharedActions.visitPage("/");
  SharedAssertions.verifyUserInPage("/");
});

When("I add products to the cart", () => {
  addProductActions.clickAddToCart(3); 
});

When("I proceed to checkout after login", () => {
  SharedActions.clickToLink("a","Cart");
  SharedAssertions.verifyUserInPage("/view_cart");
  SharedActions.clickToLink("a","Proceed To Checkout");
  SharedActions.clickToLink("a","Register / Login");

  RegisterUserActions.enterName();
  RegisterUserActions.enterValidEmail();
  RegisterUserActions.clickOnSignUp("button","Signup");

  RegisterUserAssertions.showMessage("h2","Enter Account Information");
  RegisterUserActions.enterAdditionalDetails();
  RegisterUserActions.clickOnSignUp("button","Create Account");
  cy.wait(2000);
  RegisterUserAssertions.showMessage("h2","Account Created!");
  RegisterUserAssertions.showMessage("p","Congratulations! Your new account has been successfully created!");

  RegisterUserActions.clickOnSignUp("a","Continue");
  SharedAssertions.verifyLogoutAndDeleteAccount();
});

When("I place an order with comment and payment details", () => {
  SharedActions.clickToLink("a","Cart");
  SharedActions.clickToLink("a","Proceed To Checkout");

   CheckoutActions.addTextInBox("Test purchase");
  SharedActions.clickToLink("a","Place Order");

  CheckoutDIActions.enterPaymentDetails({
    name: "John Doe",
    card: "4111111111111111",
    cvc: "123",
    month: "12",
    year: "2025"
  });

  CheckoutDIActions.payAndConfirm();
});

Then("I should see the order success message", () => {
  CheckoutDIAssertions.verifyOrderSuccess();
});

Then("I download the invoice and verify it", () => {
  CheckoutDIActions.downloadInvoice();
  CheckoutDIAssertions.verifyInvoiceDownloaded("invoice.txt");
});
