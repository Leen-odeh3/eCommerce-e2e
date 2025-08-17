///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addProductActions from "../../../pageObjects/addProduct/actions.cy";
import addProductAssertions from "../../../pageObjects/addProduct/assetion.cy";
import Shared from '../../../pageObjects/shared/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const action= new addProductActions()
const assert=new addProductAssertions()
const sharedAssertion = new Shared()
const actionShared= new SharedActions();

Given('Navigate to website', () => {
  actionShared.visitPage("/")
});

When('I add {int} products to the cart', (qty) => {
  action.clickAddToCart(qty);
});

Then('I should see the product added confirmation {string}', (confirmMsg) => {
  sharedAssertion.VerifyIsVisible("p",confirmMsg)
 assert.showConfirmAdded()
});

Then('The cart should update with the new product', () => {
cy.wait(1000)
actionShared.visitPage("/view_cart")
 sharedAssertion.VerifyIsVisible("a","Long Maxi Tulle Fancy Dress Up Outfits -Pink")
 assert.check()
});
