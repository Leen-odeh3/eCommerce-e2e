class CheckoutDIActions {

  enterPaymentDetails({name, card, cvc, month, year}) {
    cy.getByDataQa('name-on-card').type(name);
    cy.getByDataQa('card-number').type(card);
    cy.getByDataQa('cvc').type(cvc);
    cy.getByDataQa('expiry-month').type(month);
    cy.getByDataQa('expiry-year').type(year);
  }

  payAndConfirm() {
    cy.getByDataQa('pay-button').click();
  }

  downloadInvoice() {
    cy.contains('a', 'Download Invoice', { timeout: 10000 }).should('be.visible').click();
  }
}

export default new CheckoutDIActions();
