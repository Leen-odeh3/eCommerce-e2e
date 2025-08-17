class SharedActions {

    visitPage(url) {
        cy.visit(url)
    }
    
    clickToLink(tag, text) {
        cy.contains(tag, text).click()
    }
}

export default SharedActions