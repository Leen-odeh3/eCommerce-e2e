class Shared {

    verifyUserInPage(path) {
        cy.location("pathname").should("eq", path);
        cy.location("hostname").should("eq", "www.automationexercise.com");
    }

    verifyLogoutAndDeleteAccount() {
        cy.get('a').contains('Logout').should('be.visible');
        cy.get('a').contains('Delete Account').should('be.visible');
        cy.get('a').contains('Logged in as').should('be.visible');
    }

    VerifyIsVisible(tag, text) {
        cy.contains(tag, text).should('be.visible').click()
    }

     VerifyIsVisibleWithoutClick(tag, text) {
        cy.contains(tag, text).should('be.visible')
    }
}
export default new Shared();