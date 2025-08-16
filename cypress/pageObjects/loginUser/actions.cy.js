import { generateUserData } from '../../support/utils/userData';

const userData = generateUserData();

class loginUserActions {

  visitLoginPage() {
    cy.visit('/login');
  }

  enterValidCredentials() {
    cy.getByDataQa('login-email').type(userData.loginEmail);
    cy.getByDataQa('login-password').type(userData.loinPass);
  }

  enterInvalidEmailAndValidPassword() {
    cy.getByDataQa('login-email').type(userData.randomEmail);
    cy.getByDataQa('login-password').type(userData.loinPass);
  }

  enterValidEmailAndInvalidPassword() {
    cy.getByDataQa('login-email').type(userData.loginEmail);
    cy.getByDataQa('login-password').type('invalidPassword123');
  }

  clickLoginButton() {
    cy.getByDataQa('login-button').click();
  }

}

export default loginUserActions;
