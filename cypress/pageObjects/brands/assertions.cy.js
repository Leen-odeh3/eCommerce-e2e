class BrandAssertions {
  verifyBrandsSectionVisible() {
    cy.get(".brands_products").should("be.visible");
    cy.contains("h2", "Brands").should("be.visible");
  }

  verifyUserInBrandPage(brandName) {
    cy.url().should("include", `/brand_products/${brandName}`);
    cy.contains("h2", brandName).should("be.visible");
  }

  verifyBrandProductsVisible() {
    cy.get(".features_items .product-image-wrapper").should("exist").and("be.visible");
  }
}

export default new BrandAssertions();
