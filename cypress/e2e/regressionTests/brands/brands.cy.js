///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BrandActions from '../../../pageObjects/brands/actions.cy';
import BrandAssertions from '../../../pageObjects/brands/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';
import Shared from '../../../pageObjects/shared/assertions.cy';

const brandAction = new BrandActions();
const brandAssertion = new BrandAssertions();
const sharedAction = new SharedActions();
const sharedAssertion = new Shared();

// Background
Given("I am on the home page", () => {
  sharedAction.visitPage("/");
  sharedAssertion.verifyUserInPage("/");
});

// Scenario steps
When("I click on the 'Products' button", () => {
  sharedAction.clickToLink("a", "Products");
});

Then("I should see the 'Brands' section visible", () => {
  brandAssertion.verifyBrandsSectionVisible();
});

When("I click on the brand {string}", (brandName) => {
  brandAction.clickOnBrand(brandName);
});

Then("I should be navigated to the {string} brand page and see its products", (brandName) => {
  brandAssertion.verifyUserInBrandPage(brandName);
  brandAssertion.verifyBrandProductsVisible();
});
