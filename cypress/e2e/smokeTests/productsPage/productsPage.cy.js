///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import productsPageActions from '../../../pageObjects/productsPage/actions.cy';
import productsPageAssertions from '../../../pageObjects/productsPage/assertions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy'
import SharedActions from '../../../pageObjects/shared/actions.cy';

Given("I navigate to website", () => {
 SharedActions.visitPage("/")
});

When('I should see the home page visible successfully', () => {
  Shared.verifyUserInPage("/");
});

Then("I click on the {string} button", (link) => {
  productsPageActions.clickToLink(link)
});

Then('I should be navigated to the {string} page successfully', (pageName) => {
  Shared.verifyUserInPage("/" + pageName)
});

Then("I should see the products list", () => {
  productsPageActions.showProductsList();
});

When('I click on "View Product" of the first product', () => {
  productsPageActions.clickViewProduct()
});

Then("I should be navigated to the product detail page", () => {
  Shared.verifyUserInPage("/product_details/1")
});

Then("I should see product details including name, category, price, availability, condition, and brand", () => {
  productsPageAssertions.verifyProductDetails();
});

Then("Go To HomePage",()=>{
  SharedActions.visitPage("/")
  cy.wait(2000)
})

When('I enter {string} in search input and click search button', (name) => {
  productsPageActions.typeInSearch(name);
  productsPageActions.clickSearchIcon();
});

Then('I should see {string}', (text) => {
  productsPageAssertions.seeSearchedTitle(text);
});

Then('I should see all products related to search', () => {
  productsPageAssertions.seeRelatedProductSearch();
});

Then('I should see more than one product related to search', () => {
  productsPageAssertions.verifyMultipleSearchResults();
});

Then('each displayed product name should contain the word {string}', (keyword) => {
  productsPageAssertions.verifySearchResultsContainKeyword(keyword);
});


