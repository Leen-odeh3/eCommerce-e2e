class scrollAction {


    scrollToFooter() {
        cy.scrollTo('bottom');
    }

    clickScrollUpArrow() {
        cy.get('#scrollUp').click();
    }

    manualScrollToTop() {
        cy.scrollTo('bottom');
    }

    scrollToTop() {
        cy.scrollTo(0, 0);
        cy.wait(500);
    }
}

export default scrollAction