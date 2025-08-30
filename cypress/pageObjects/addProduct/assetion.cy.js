class addProductAssertions {

  showConfirmAdded() {
    cy.contains('.btn-success', 'Continue Shopping')
      .should('be.visible')
      .click();
  }

  check() {
    cy.get('#quantity')
      .invoke('val')
      .then((val) => {
        expect(Number(val)).to.be.greaterThan(0);
      });
  }
}

export default new addProductAssertions()