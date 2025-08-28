///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import RecommendedActions from "../../../pageObjects/recommendedItems/actions.cy";
import RecommendedAssertions from "../../../pageObjects/recommendedItems/assertion.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import Shared from "../../../pageObjects/shared/assertions.cy";

Given("I navigate to the homepage", () => {
  SharedActions.visitPage("/");
  Shared.verifyUserInPage("/");
});

When("I scroll to bottom of the page", () => {
  RecommendedActions.scrollToBottom();
});

Then('I should see "RECOMMENDED ITEMS" section', () => {
  RecommendedAssertions.verifyRecommendedSection();
});

When('I click on "Add To Cart" on recommended product', () => {
  RecommendedActions.addRecommendedProductToCart();
});

When('I click on "View Cart" button', () => {
  RecommendedActions.clickViewCartButton();
});

Then("I should see the product in the cart page", () => {
  RecommendedAssertions.verifyProductInCart();
});
