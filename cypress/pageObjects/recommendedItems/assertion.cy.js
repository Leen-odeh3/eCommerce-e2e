class RecommendedAssertions {

  verifyRecommendedSection() {
    cy.contains('h2', 'recommended items').should('be.visible');
  }

  verifyProductInCart() {
    cy.get('.cart_description').should('exist').and('be.visible');
  }
}

export default new RecommendedAssertions()
