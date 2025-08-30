class addProductActions{

      clickAddToCart(times =3) {
    for (let i = 0; i < times; i++) {
      cy.get("[data-product-id='22']").first().click({force: true});
       cy.get('.modal-content', { timeout: 500 })
    }
  }
}
export default new addProductActions()