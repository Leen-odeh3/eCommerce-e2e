class BrandActions {
  clickOnBrand(brandName) {
    cy.get(".brands_products").contains(brandName).click();
  }
}

export default new BrandActions()
