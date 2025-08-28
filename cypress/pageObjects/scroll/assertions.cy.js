class scrollAssertion {

    verifySubShow() {
        cy.contains("h2", "Subscription").should('be.visible')
    }

    verifyPageScrolledToTop() {
        cy.wait(700);
        cy.window().then((win) => {
            expect(win.scrollY).to.equal(0);
        });
    }

    verifyFullFledgedTextVisible() {
        cy.get('.active h2').contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    }
}

export default new scrollAssertion()