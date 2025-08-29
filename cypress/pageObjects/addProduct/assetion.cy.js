class addProductAssertions {

  showConfirmAdded() {
    cy.get(".btn-success").last().should("be.visible").click()
  }

  check() {
    cy.get('#quantity').should('have.length.greaterThan', 0)
  }
}

export default new addProductAssertions()