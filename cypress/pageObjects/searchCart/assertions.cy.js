class SearchCartAssertions {
  verifyAllProductsPage() {
    cy.url().should("include", "/products");
    cy.contains("h2", "All Products").should("be.visible");
  }

  verifySearchedProductsSection() {
    cy.contains("h2", "Searched Products").should("be.visible");
  }

  verifySearchedProductsVisible() {
    cy.get(".productinfo.text-center").should("exist").and("be.visible");
  }

  verifyProductsInCart() {
    cy.get(".cart_description").should("exist").and("be.visible");
  }
}

export default SearchCartAssertions;
