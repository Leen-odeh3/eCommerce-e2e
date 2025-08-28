///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addProductActions from "../../../pageObjects/addProduct/actions.cy";
import addProductAssertions from "../../../pageObjects/addProduct/assetion.cy";
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';


Given('Navigate to website', () => {
  SharedActions.visitPage("/")
});

When('I add {int} products to the cart', (qty) => {
  addProductActions.clickAddToCart(qty);
});

Then('I should see the product added confirmation {string}', (confirmMsg) => {
  Shared.VerifyIsVisible("p", confirmMsg)
  addProductAssertions.showConfirmAdded()
});

Then('The cart should update with the new product', () => {
  cy.wait(1000)
  SharedActions.visitPage("/view_cart")
  Shared.VerifyIsVisible("a", "Long Maxi Tulle Fancy Dress Up Outfits -Pink")
  addProductAssertions.check()
});
