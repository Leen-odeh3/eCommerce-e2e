class checkoutAction {

  addTextInBox() {
    cy.get("[name='message']").type("test data....");
  }

  enterPaymentDetails() {
    cy.getByDataQa('name-on-card').type('John Doe');
    cy.getByDataQa('card-number').type('4111111111111111');
    cy.getByDataQa('cvc').type('123');
    cy.getByDataQa('expiry-month').type('12');
    cy.getByDataQa('expiry-year').type('2025');
  }

  clickPayAndConfirm() {
    cy.getByDataQa('pay-button').click();
  }

  clickDeleteAccount() {
    cy.getByDataQa('delete-account-button').click();
  }
}

export default checkoutAction