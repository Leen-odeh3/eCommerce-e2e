class addProductAssertions{

    showConfirmAdded(){
      cy.contains("p","Your product has been added to cart.").should("be.visible")
      cy.get(".btn-success").last().should("be.visible").click()
    }

    check(){
        cy.contains("a","Long Maxi Tulle Fancy Dress Up Outfits -Pink").should("be.visible")
    }
}

export default addProductAssertions