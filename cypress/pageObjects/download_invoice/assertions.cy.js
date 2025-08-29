class CheckoutDIAssertions {
  verifyOrderSuccess() {
    cy.contains("h2","Order Placed!").should('be.visible');
    cy.contains("p","Congratulations! Your order has been confirmed!").should('be.visible');
  }

  verifyInvoiceDownloaded(fileName = "invoice.txt") {
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(`${downloadsFolder}/${fileName}`).should("exist");
  }
}

export default new CheckoutDIAssertions();
