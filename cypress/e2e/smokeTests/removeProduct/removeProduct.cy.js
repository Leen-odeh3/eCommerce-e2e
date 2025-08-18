///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedActions from '../../../pageObjects/shared/actions.cy'
import Shared from '../../../pageObjects/shared/assertions.cy'
import addProductActions from '../../../pageObjects/addProduct/actions.cy'
import removeProductAction from '../../../pageObjects/removeProduct/actions.cy'

const actionShared= new SharedActions()
const assertionShared = new Shared()
const actionProduct= new addProductActions()
const action= new removeProductAction()

Given("Navigate to website", () => {
 actionShared.visitPage("/")

});

Then("I should see the home page successfully", () => {
assertionShared.verifyUserInPage("/")

});

When("I add products to the cart", () => {
actionProduct.clickAddToCart()

});

When("I click the 'Cart' Link", () => {
 actionShared.clickToLink("a","Cart")
});

Then("I should see the cart page", () => {

assertionShared.verifyUserInPage("/view_cart")
});

When("I click the 'X' button corresponding to a product", () => {
 
action.removeProduct()
});

Then("I should verify that the product is removed from the cart", () => {
  

});
