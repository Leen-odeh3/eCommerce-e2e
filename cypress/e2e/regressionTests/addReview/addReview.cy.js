///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductReviewActions from "../../../pageObjects/addReview/ProductReviewActions.cy";
import ProductReviewAssertions from "../../../pageObjects/addReview/ProductReviewAssertions.cy";
import SharedActions from '../../../pageObjects/shared/actions.cy';

Given("I navigate to website", () => {
  SharedActions.visitPage("/")
});

When("I click on {string} button", (btn) => {
  if (btn === "Products") {
    ProductReviewActions.clickProductsButton();
  } else if (btn === "View Product") {
    ProductReviewActions.clickViewProduct();
  }
});

Then("I should be navigated to ALL PRODUCTS page successfully", () => {
  ProductReviewAssertions.verifyAllProductsPage();
});

Then("I should see {string} section", (section) => {
  if (section === "Write Your Review") {
    ProductReviewAssertions.verifyReviewSection();
  }
});

When(
  "I enter name {string}, email {string} and review {string}",
  (name, email, review) => {
    ProductReviewActions.enterReviewDetails(name, email, review);
  }
);

When("I click on {string} review button", (btn) => {
  if (btn === "Submit") {
    ProductReviewActions.clickSubmitReview();
  }
});

Then("I should see success message {string}", (msg) => {
  ProductReviewAssertions.verifySuccessMessage(msg);
});
