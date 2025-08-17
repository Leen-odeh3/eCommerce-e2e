class addProductActions{

    clickAddToCart(){
        cy.get("[data-product-id='22']").first().click();
    }

    GoToCartPage(){
        cy.visit("/view_cart")
    }
}
export default addProductActions