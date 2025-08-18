///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductReviewActions from "../../../pageObjects/addReview/ProductReviewActions.cy";
import ProductReviewAssertions from "../../../pageObjects/addReview/ProductReviewAssertions.cy";
import SharedActions from '../../../pageObjects/shared/actions.cy';

const actions = new ProductReviewActions();
const assertions = new ProductReviewAssertions();
const shared = new SharedActions

Given("I navigate to website", () => {
  shared.visitPage("/")
});

When("I click on {string} button", (btn) => {
  if (btn === "Products") {
    actions.clickProductsButton();
  } else if (btn === "View Product") {
    actions.clickViewProduct();
  }
});

Then("I should be navigated to ALL PRODUCTS page successfully", () => {
  assertions.verifyAllProductsPage();
});

Then("I should see {string} section", (section) => {
  if (section === "Write Your Review") {
    assertions.verifyReviewSection();
  }
});

When(
  "I enter name {string}, email {string} and review {string}",
  (name, email, review) => {
    actions.enterReviewDetails(name, email, review);
  }
);

When("I click on {string} review button", (btn) => {
  if (btn === "Submit") {
    actions.clickSubmitReview();
  }
});

Then("I should see success message {string}", (msg) => {
  assertions.verifySuccessMessage(msg);
});
