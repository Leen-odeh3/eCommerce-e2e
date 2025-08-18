///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import RecommendedActions from "../../../pageObjects/recommendedItems/actions.cy";
import RecommendedAssertions from "../../../pageObjects/recommendedItems/assertion.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedAssertions from "../../../pageObjects/shared/assertions.cy";

const actions = new RecommendedActions();
const assertions = new RecommendedAssertions();
const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();

Given("I navigate to the homepage", () => {
  sharedActions.visitPage("/");
  sharedAssertions.verifyUserInPage("/");
});

When("I scroll to bottom of the page", () => {
  actions.scrollToBottom();
});

Then('I should see "RECOMMENDED ITEMS" section', () => {
  assertions.verifyRecommendedSection();
});

When('I click on "Add To Cart" on recommended product', () => {
  actions.addRecommendedProductToCart();
});

When('I click on "View Cart" button', () => {
  actions.clickViewCartButton();
});

Then("I should see the product in the cart page", () => {
  assertions.verifyProductInCart();
});
