///<reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactUsActions from "../../../pageObjects/contactUs/actions.cy";
import ContactUsAssertions from "../../../pageObjects/contactUs/assertion.cy";
import SharedActions from '../../../pageObjects/shared/actions.cy';


// Background
Given("I open the Automation Exercise website", () => {
  SharedActions.visitPage("/")
});

Given("I navigate to the Contact Us page", () => {
  ContactUsActions.navigateToContactUs();
});

When("I enter {string} in the name field", (name) => {
  ContactUsActions.enterName(name);
});

When("I enter {string} in the email field", (email) => {
  ContactUsActions.enterEmail(email);
});

When("I enter {string} in the subject field", (subject) => {
  ContactUsActions.enterSubject(subject);
});

When("I enter {string} in the message field", (message) => {
  ContactUsActions.enterMessage(message);
});

When("I upload a file {string}", (filePath) => {
  ContactUsActions.uploadFile(filePath);
});

When("I click the submit button", () => {
  ContactUsActions.submitForm();
});

When("I leave the email field empty", () => {
  //not doing anything #empty
});

When("I click the Home button", () => {
  SharedActions.clickToLink("a","Home");
});

Then("I should see a success message {string}", () => {
  ContactUsAssertions.verifySuccessMessage();
});

Then("I should see an error alert", () => {
  ContactUsAssertions.verifyErrorAlert();
});

Then("I should be redirected to the homepage", () => {
  ContactUsAssertions.verifyHomePageRedirect();
});
