class productsPageActions {

    clickToLink(link) {
        cy.contains("a", link).click();
    }

    showProductsList() {
        cy.get(".product-image-wrapper").then((products) => {
            for (let i = 0; i < products.length; i++) {
                cy.wrap(products[i]).invoke('text').then((productName) => {
                    cy.log(productName)
                })
            }
        })
    }

    clickViewProduct(){
  cy.get(".product-image-wrapper").first().contains("View Product").click();
    }
  
    typeInSearch(name){
        cy.get("#search_product").type(name);
    }

    clickSearchIcon(){
        cy.get("#submit_search").click();
    }

}


export default productsPageActions