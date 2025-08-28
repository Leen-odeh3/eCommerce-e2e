///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import viewCategoryProductsActions from '../../../pageObjects/viewCategoryProducts/actions.cy';

Given("Navigate to website", () => {
  SharedActions.visitPage("/")
});

Then("I should see categories in the left sidebar", () => {
Shared.VerifyIsVisibleWithoutClick("h2","Category")
cy.wait(2000)
});

When("I click on the 'Women' category", () => {
viewCategoryProductsActions.chooseCategory()

});

When("I click on a sub-category link under 'Women' category", () => {
viewCategoryProductsActions.clickSubCategory()
cy.wait(2000)
});

Then("I should see the category page with title 'WOMEN - TOPS PRODUCTS'", () => {
Shared.VerifyIsVisibleWithoutClick("h2","Women - Dress Products")
Shared.verifyUserInPage("/category_products/1")
});

