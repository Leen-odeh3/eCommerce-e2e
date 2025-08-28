class addProductAssertions {

  showConfirmAdded() {
    cy.get(".btn-success").last().should("be.visible").click()
  }

  check() {
    cy.get(".cart_quantity .disabled").should('have.length.greaterThan', 0)
  }
}

export default new addProductAssertions()