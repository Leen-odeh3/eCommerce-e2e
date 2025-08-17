class productsPageAssertions{

        verifyProductDetails(){
    cy.get(".product-information").within(() => {
    cy.get("h2").should("be.visible"); 
    cy.contains("Category").should("be.visible");
    cy.contains("Rs.").should("be.visible");
    cy.contains("Availability").should("be.visible");
    cy.contains("Condition").should("be.visible");
    cy.contains("Brand").should("be.visible");
  });
}
}
export default productsPageAssertions