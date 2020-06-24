it('Select movie and turn back', () => {
  cy.visit('/');

  cy.get('input[type="search"]')
    .type('query')
    .should('have.value', 'query');
  cy.get('button')
    .contains('search')
    .click();

  cy.get('span[data-testid="status"]')
    .contains('movies found');

  cy.get('ul[data-testid="films"] li:nth-child(2)')
    .click();

  cy.get('[data-testid="selected film"]');

  cy.get('[data-testid="initial search"]')
    .click();

  cy.get('input[type="search"]');
});
