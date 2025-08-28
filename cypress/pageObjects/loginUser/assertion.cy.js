class loginUserAssertions {

    verifyErrorMessage(message) {
        cy.contains('p', message, { timeout: 10000 }).should('exist').should('be.visible');
    }
}

export default new loginUserAssertions()
