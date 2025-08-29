class RecommendedActions {

  scrollToBottom() {
    cy.scrollTo('bottom');
  }

addRecommendedProductToCart() {
  cy.get('.recommended_items .item').first()
    .contains('Add to cart')
    .click({ force: true });

  cy.get('.modal-content .close-modal').click({ force: true });
}


  clickViewCartButton() {
    cy.get('a').contains('View Cart').click();
  }
}

export default new RecommendedActions()
