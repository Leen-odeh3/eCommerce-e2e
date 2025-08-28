///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import addProductActions from '../../../pageObjects/addProduct/actions.cy'
import removeProductAction from '../../../pageObjects/removeProduct/actions.cy'

Given("Navigate to website", () => {
 SharedActions.visitPage("/")

});

Then("I should see the home page successfully", () => {
Shared.verifyUserInPage("/")

});

When("I add products to the cart", () => {
addProductActions.clickAddToCart()

});

When("I click the 'Cart' Link", () => {
 SharedActions.clickToLink("a","Cart")
});

Then("I should see the cart page", () => {

Shared.verifyUserInPage("/view_cart")
});

When("I click the 'X' button corresponding to a product", () => {
 
removeProductAction.removeProduct()
});

Then("I should verify that the product is removed from the cart", () => {
  

});
