class RegisterUserAssertions {

    showMessage(tag , msg) {
        cy.contains(tag,msg).should('be.visible')
    }
}

export default new RegisterUserAssertions()