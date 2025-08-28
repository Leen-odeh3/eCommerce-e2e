import { generateUserData } from '../../support/utils/userData';

class RegisterUserActions {

  constructor() {
    const userData = generateUserData();
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.fullName = userData.fullName;
    this.confirmationFullName = userData.confirmationFullName;
    this.randomEmail = userData.randomEmail;
    this.confirmationEmail = userData.confirmationEmail;
    this.randomPassword = userData.randomPassword;
    this.loginEmail = userData.loginEmail;
    this.birthDay = userData.birthDay;
    this.birthMonth = userData.birthMonth;
    this.birthYear = userData.birthYear;
    this.companyName = userData.companyName;
    this.address = userData.address;
    this.country = userData.country;
    this.randomState = userData.randomState;
    this.randomCity = userData.randomCity;
    this.randomZipCode = userData.randomZipCode;
    this.randomPhoneNumber = userData.randomPhoneNumber;
    this.invalidEmail = userData.invalidEmail;
  }

  clickOnSignUp(element, btnText) {
    cy.contains(element, btnText).click();
  }

  enterName() {
    cy.getByDataQa("signup-name").type(this.firstName + " " + this.lastName);
  }
  enterValidEmail() {
    cy.getByDataQa("signup-email").type(this.randomEmail);
  }

  registerWithExistingEmail() {
    cy.getByDataQa("signup-email").type(this.loginEmail);
    cy.wait(1000)
  }

  enterInvalidEmail() {
    cy.getByDataQa("signup-email").type(this.invalidEmail);
  }

  enterAdditionalDetails() {
    cy.get('[for="id_gender2"]').click();
    cy.wait(1000)
    cy.getByDataQa("password").type(this.randomPassword);
    cy.getByDataQa("days").select(this.birthDay);
    cy.getByDataQa("months").select(this.birthMonth);
    cy.getByDataQa("years").select(this.birthYear);
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.getByDataQa("first_name").type(this.firstName);
    cy.getByDataQa("last_name").type(this.lastName);
    cy.getByDataQa("company").type(this.companyName);
    cy.getByDataQa("address").type(this.address);
    cy.getByDataQa("country").select(this.country);
    cy.getByDataQa("state").type(this.randomState);
    cy.getByDataQa("city").type(this.randomCity);
    cy.getByDataQa("zipcode").type(this.randomZipCode);
    cy.getByDataQa("mobile_number").type(this.randomPhoneNumber);
  }

  submitRegistration() {
    cy.getByDataQa("create-account").click();
  }
}

export default new RegisterUserActions()
