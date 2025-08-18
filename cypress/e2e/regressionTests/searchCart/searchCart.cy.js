///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchCartActions from '../../../pageObjects/searchCart/actions.cy';
import SearchCartAssertions from '../../../pageObjects/searchCart/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import SharedAssertions from '../../../pageObjects/shared/assertions.cy';
import loginUserActions from '../../../pageObjects/loginUser/actions.cy';

const action = new SearchCartActions();
const assertion = new SearchCartAssertions();
const sharedAction = new SharedActions();
const sharedAssertion = new SharedAssertions();
const loginAction = new loginUserActions();

Given("I am on the home page", () => {
  sharedAction.visitPage("/");
  sharedAssertion.verifyUserInPage("/");
});

When("I click on the 'Products' button", () => {
  sharedAction.clickToLink("a", "Products");
});

Then("I should be navigated to the ALL PRODUCTS page", () => {
  assertion.verifyAllProductsPage();
});

When("I search for {string}", (productName) => {
  action.searchProduct(productName);
});

Then("I should see the 'SEARCHED PRODUCTS' section", () => {
  assertion.verifySearchedProductsSection();
});

Then("I should see all related products", () => {
  assertion.verifySearchedProductsVisible();
});

When("I add all searched products to the cart", () => {
  action.addSearchedProductsToCart();
});

When("I click the 'Cart' button", () => {
  sharedAction.clickToLink("a", "Cart");
});

Then("I should see the searched products in the cart", () => {
  assertion.verifyProductsInCart();
});

When("I click on the 'Signup / Login' button", () => {
  sharedAction.clickToLink("a", "Signup / Login");
});

When("I login with valid credentials", () => {
  loginAction.enterValidCredentials();
  loginAction.clickLoginButton();
});

When("I click the 'Cart' button again", () => {
  sharedAction.clickToLink("a", "Cart");
});
