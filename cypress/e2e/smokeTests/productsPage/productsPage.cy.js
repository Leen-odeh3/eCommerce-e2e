///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import productsPageActions from '../../../pageObjects/productsPage/actions.cy';
import productsPageAssertions from '../../../pageObjects/productsPage/assertions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy'

const action = new productsPageActions()
const assertion = new productsPageAssertions()
var sharedAction = new Shared()

Given("I navigate to website", () => {
  cy.visit("/");
});

When('I should see the home page visible successfully', () => {
  sharedAction.verifyUserInPage("/");
});

Then("I click on the {string} button", (link) => {
  action.clickToLink(link)
});

Then('I should be navigated to the {string} page successfully', (pageName) => {
  sharedAction.verifyUserInPage("/" + pageName)
});

Then("I should see the products list", () => {
  action.showProductsList();
});

When('I click on "View Product" of the first product', () => {
  action.clickViewProduct()
});

Then("I should be navigated to the product detail page", () => {
  sharedAction.verifyUserInPage("/product_details/1")
});

Then("I should see product details including name, category, price, availability, condition, and brand", () => {
  assertion.verifyProductDetails();
});

Then("Go To HomePage",()=>{
  cy.visit("/")
  cy.wait(2000)
})

When('I enter {string} in search input and click search button', (name) => {
  action.typeInSearch(name)
  action.clickSearchIcon()
});

Then('I should see {string}', (text) => {
  assertion.seeSearchedTitle(text)
});

Then('I should see all products related to search', () => {
  assertion.seeRelatedProductSearch()
});
