class SearchCartActions {
    
 searchProduct(productName) {
  cy.get("#search_product").type(productName);
  cy.get("#submit_search").click();
}

  addSearchedProductsToCart() {
    cy.get(".productinfo.text-center").each(($el) => {
      cy.wrap($el).parent().contains("Add to cart").click();
      cy.get(".close-modal").click(); 
    });
  }
}

export default SearchCartActions;
