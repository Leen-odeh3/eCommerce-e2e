class viewCategoryProductsActions {

    chooseCategory() {
        cy.get(".left-sidebar")
            .contains("Women")
            .click();
    }

    clickSubCategory() {
      cy.contains("a","Dress").click();
    }
}

export default new viewCategoryProductsActions()