class Shared {

    verifyUserInPage(path) {
        cy.location("pathname").should("eq", path);
        cy.location("hostname").should("eq", "www.automationexercise.com");
    }

verifyLogoutAndDeleteAccount() {
  cy.get('a[href="/logout"]').should('be.visible');
  cy.get('a[href="/delete_account"]').should('be.visible');
  cy.get('ul.nav a').contains('Logged in as').should('be.visible');
}


    VerifyIsVisible(tag, text) {
        cy.contains(tag, text).should('be.visible').click()
    }

     VerifyIsVisibleWithoutClick(tag, text) {
        cy.contains(tag, text).should('be.visible')
    }
}
export default new Shared();