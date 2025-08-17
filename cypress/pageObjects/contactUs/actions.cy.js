// cypress/support/actions/ContactUsActions.js
class ContactUsActions {
  navigateToContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }

  enterName(name) {
    cy.getByDataQa('name').type(name);
  }

  enterEmail(email) {
    cy.getByDataQa('email').type(email);
  }

  enterSubject(subject) {
    cy.getByDataQa('subject').type(subject);
  }

  enterMessage(message) {
    cy.getByDataQa('message').type(message);
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').attachFile(filePath);
  }

  submitForm() {
    cy.getByDataQa('submit-button').click();
  }
}

export default ContactUsActions;
