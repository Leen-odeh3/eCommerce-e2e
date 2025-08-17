class checkoutAssertion{

  verifySuccessMessage() {
    cy.wait(3000)
    cy.contains("h2","Order Placed!").should('be.visible')
    cy.contains("p","Congratulations! Your order has been confirmed!").should('be.visible')
  }

}

export default checkoutAssertion