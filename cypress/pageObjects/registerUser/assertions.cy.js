class RegisterUserAssertions {

    verifyInRegPage(title) {
        cy.wait(1000);
        cy.contains("h2", title).should('be.visible')
    }
    showMessage(tag, msg) {
        cy.wait(1000)
        cy.contains(tag,msg).should('be.visible')
    }
}

export default RegisterUserAssertions