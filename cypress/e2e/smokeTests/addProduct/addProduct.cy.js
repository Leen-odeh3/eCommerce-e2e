///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addProductActions from "../../../pageObjects/addProduct/actions.cy";
import addProductAssertions from "../../../pageObjects/addProduct/assetion.cy";

const action= new addProductActions()
const assert=new addProductAssertions()

Given('Navigate to website', () => {
  cy.visit('/');
});

When('I select a product to add and click add to cart', () => {
action.clickAddToCart()
});

Then('I should see the product added confirmation', () => {
 assert.showConfirmAdded()
});

Then('The cart should update with the new product', () => {
cy.wait(1000)
 action.GoToCartPage()
 assert.check()

});
