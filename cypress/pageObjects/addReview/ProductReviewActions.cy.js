class ProductReviewActions {

  clickProductsButton() {
    cy.get('a[href="/products"]').click()
  }

  clickViewProduct() {
    cy.get('.choose > .nav > li > a').first().click()
  }

  enterReviewDetails(name, email, review) {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#review').type(review)
  }

  clickSubmitReview() {
    cy.get('#button-review').click()
  }
}

export default ProductReviewActions
