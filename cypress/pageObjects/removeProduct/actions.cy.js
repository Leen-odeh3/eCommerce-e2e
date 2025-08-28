class removeProductAction{

    removeProduct(){
      cy.get('.cart_quantity_delete').first().click();
    }
}

export default new removeProductAction()