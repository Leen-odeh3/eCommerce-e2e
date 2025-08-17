class subscriptionActions{

    scrollToFooter(){
        cy.get("#footer").scrollIntoView()
        return this;
    }

    enterEmail(){
        cy.get("#susbscribe_email").type("leenodeh733@gmail.com{enter}");
    }

    clickOnCartLink(){
        cy.contains("a","Cart").click()
    }
}
export default subscriptionActions