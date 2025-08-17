class addProductAssertions{

    showConfirmAdded(){
      cy.contains("p","Your product has been added to cart.").should("be.visible")
      cy.get(".btn-success").last().should("be.visible").click()
    }

    check(){
        cy.contains("a","Long Maxi Tulle Fancy Dress Up Outfits -Pink").should("be.visible")
        cy.get(".cart_quantity .disabled").should('have.length.greaterThan',0)
    }
}

export default addProductAssertions