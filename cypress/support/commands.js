
Cypress.Commands.add('getByDataQa', (value) => {
  cy.wait(300)
  cy.get(`[data-qa="${value}"]`); 
});