class ProductReviewAssertions {

  verifyAllProductsPage() {
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')
  }

  verifyReviewSection() {
    cy.contains('Write Your Review').should('be.visible')
  }

  verifySuccessMessage() {
    cy.contains('Thank you for your review.').should('be.visible')
  }
}

export default ProductReviewAssertions
