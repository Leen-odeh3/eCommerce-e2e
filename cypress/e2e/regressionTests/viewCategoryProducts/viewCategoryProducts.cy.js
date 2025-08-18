///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import viewCategoryProductsActions from '../../../pageObjects/viewCategoryProducts/actions.cy';

const shaerdActions= new SharedActions()
const assert= new Shared()
const action= new viewCategoryProductsActions()

Given("Navigate to website", () => {
  shaerdActions.visitPage("/")
});

Then("I should see categories in the left sidebar", () => {
assert.VerifyIsVisibleWithoutClick("h2","Category")
cy.wait(2000)
});

When("I click on the 'Women' category", () => {
action.chooseCategory()

});

When("I click on a sub-category link under 'Women' category", () => {
action.clickSubCategory()
cy.wait(2000)
});

Then("I should see the category page with title 'WOMEN - TOPS PRODUCTS'", () => {
assert.VerifyIsVisibleWithoutClick("h2","Women - Dress Products")
assert.verifyUserInPage("/category_products/1")
});

