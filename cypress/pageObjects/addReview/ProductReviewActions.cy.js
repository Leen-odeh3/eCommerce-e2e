class ProductReviewActions {

  clickProductsButton() {
    cy.get('a[href="/products"]').click()
  }

  clickViewProduct() {
    cy.get('.choose a').first().click();
  }

  enterReviewDetails(name, email, review) {
    cy.get('#name').clear().type(name);
    cy.get('#email').clear().type(email);
    cy.get('#review').clear().type(review);
  }

  clickSubmitReview() {
    cy.get('#button-review').click()
  }
}

export default new ProductReviewActions()
