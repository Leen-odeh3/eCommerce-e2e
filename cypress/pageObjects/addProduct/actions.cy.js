class addProductActions{

      clickAddToCart(times =3) {
    for (let i = 0; i < times; i++) {
      cy.get("[data-product-id='22']").first().click({force: true});
      cy.wait(1000);
    }
  }

    GoToCartPage(){
        cy.visit("/view_cart")
    }
}
export default addProductActions