class Shared {

    verifyUserInPage(path) {
        cy.location("pathname").should("eq", path);
        cy.location("hostname").should("eq", "www.automationexercise.com");
    }

    verifyLogoutAndDeleteAccount() {
        cy.get('a').contains('Logout').should('exist').and('be.visible');
        cy.get('a').contains('Delete Account').should('exist').and('be.visible');
        cy.get('a').contains('Logged in as').should('exist').and('be.visible');
    }

    VerifyIsVisible(tag, text) {
        cy.contains(tag, text).should('be.visible')
    }
}
export default Shared;