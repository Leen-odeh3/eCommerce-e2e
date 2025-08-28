// cypress/support/assertions/ContactUsAssertions.js
class ContactUsAssertions {
  verifySuccessMessage() {
    cy.get('.status').should('contain.text', 'Success! Your details have been submitted successfully.');
  }

  verifyErrorAlert() {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('plases fill out this field');
    });
  }

 verifyHomePageRedirect() {
  cy.location('pathname').should('eq', '/');
}
}

export default new ContactUsAssertions()
