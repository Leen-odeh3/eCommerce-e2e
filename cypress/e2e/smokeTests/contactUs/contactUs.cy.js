///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactUsActions from "../../../pageObjects/contactUs/actions.cy";
import ContactUsAssertions from "../../../pageObjects/contactUs/assertion.cy";

const actions = new ContactUsActions();
const assertions = new ContactUsAssertions();

// Background
Given("I open the Automation Exercise website", () => {
  cy.visit("/");
});

Given("I navigate to the Contact Us page", () => {
  actions.navigateToContactUs();
});

When("I enter {string} in the name field", (name) => {
  actions.enterName(name);
});

When("I enter {string} in the email field", (email) => {
  actions.enterEmail(email);
});

When("I enter {string} in the subject field", (subject) => {
  actions.enterSubject(subject);
});

When("I enter {string} in the message field", (message) => {
  actions.enterMessage(message);
});

When("I upload a file {string}", (filePath) => {
  actions.uploadFile(filePath);
});

When("I click the submit button", () => {
  actions.submitForm();
});

When("I leave the email field empty", () => {
  
});

When("I click the Home button", () => {
  actions.clickHome();
});

Then("I should see a success message {string}", () => {
  assertions.verifySuccessMessage();
});

Then("I should see an error alert", () => {
  assertions.verifyErrorAlert();
});

Then("I should be redirected to the homepage", () => {
  assertions.verifyHomePageRedirect();
});
