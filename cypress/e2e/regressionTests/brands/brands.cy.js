///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BrandActions from '../../../pageObjects/brands/actions.cy';
import BrandAssertions from '../../../pageObjects/brands/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';


// Background
Given("I am on the home page", () => {
  SharedActions.visitPage("/");
  Shared.verifyUserInPage("/");
});

// Scenario steps
When("I click on the 'Products' button", () => {
  SharedActions.clickToLink("a", "Products");
});

Then("I should see the 'Brands' section visible", () => {
  BrandAssertions.verifyBrandsSectionVisible();
});

When("I click on the brand {string}", (brandName) => {
  BrandActions.clickOnBrand(brandName);
});

Then("I should be navigated to the {string} brand page and see its products", (brandName) => {
  BrandAssertions.verifyUserInBrandPage(brandName);
  BrandAssertions.verifyBrandProductsVisible();
});
