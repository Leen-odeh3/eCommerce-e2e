
Cypress.Commands.add('getByDataQa', (value) => {
  cy.get(`[data-qa="${value}"]`); 
});