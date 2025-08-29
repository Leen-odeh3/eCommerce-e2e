///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchCartActions from '../../../pageObjects/searchCart/actions.cy';
import SearchCartAssertions from '../../../pageObjects/searchCart/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';
import loginUserActions from '../../../pageObjects/loginUser/actions.cy';

Given("I am on the home page", () => {
  SharedActions.visitPage("/");
  Shared.verifyUserInPage("/");
});

When("I click on the 'Products' button", () => {
  SharedActions.clickToLink("a", "Products");
});

Then("I should be navigated to the ALL PRODUCTS page", () => {
  SearchCartAssertions.verifyAllProductsPage();
});

When("I search for {string}", (productName) => {
  SearchCartActions.searchProduct(productName);
});

Then("I should see the 'SEARCHED PRODUCTS' section", () => {
  SearchCartAssertions.verifySearchedProductsSection();
});

Then("I should see all related products", () => {
  SearchCartAssertions.verifySearchedProductsVisible();
});

When("I add all searched products to the cart", () => {
  SearchCartActions.addSearchedProductsToCart();
});

When("I click the 'Cart' button", () => {
  SharedActions.clickToLink("a", "Cart");
});

Then("I should see the searched products in the cart", () => {
  SearchCartAssertions.verifyProductsInCart();
});

When("I click on the 'Signup / Login' button", () => {
  SharedActions.clickToLink("a", "Signup / Login");
});

When("I login with valid credentials", () => {
  loginUserActions.enterValidCredentials();
  loginUserActions.clickLoginButton();
});

When("I click the 'Cart' button again", () => {
  SharedActions.clickToLink("a", "Cart");
});
