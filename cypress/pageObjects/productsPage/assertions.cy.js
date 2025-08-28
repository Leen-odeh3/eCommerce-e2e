class productsPageAssertions{

  verifyProductDetails() {
    cy.get(".product-information").within(() => {
      cy.get("h2").should("be.visible");
      cy.contains("Category").should("be.visible");
      cy.contains("Rs.").should("be.visible");
      cy.contains("Availability").should("be.visible");
      cy.contains("Condition").should("be.visible");
      cy.contains("Brand").should("be.visible");
    });
  }

  seeSearchedTitle(text){
  cy.contains("h2",text).should("be.visible")
  }

seeRelatedProductSearch(){
  cy.get(".product-image-wrapper")
    .each(($el, index) => {
      cy.wrap($el).find("img").should("be.visible");
      cy.wrap($el).find("h2").should("be.visible").invoke("text").then((price) => {
        cy.log(`Product ${index + 1} price: ${price}`);
      });
      cy.wrap($el).find("p").should("be.visible").invoke("text").then((name) => {
        cy.log(`Product ${index + 1} name: ${name}`);
      });
    });
}

verifyMultipleSearchResults() {
  cy.get('.productinfo.text-center').should('have.length.greaterThan', 3); 
}

verifySearchResultsContainKeyword(keyword) {
    let found = false;
    cy.get('.product-image-wrapper')
      .each(($el) => {
        cy.wrap($el)
          .find('p')
          .invoke('text')
          .then((text) => {
            if (text.toLowerCase().includes(keyword.toLowerCase())) {
              found = true;
            }
          });
      })
      .then(() => {
        expect(found).to.be.true;
      });
  }
}

export default new productsPageAssertions()