describe('Select movie and turn back', () => {
  it('Visit movie page without films', () => {
    cy.visit('http://localhost:8080');

    cy.get('ul[data-testid="films"]')
      .should('not');
  });

  it('Find movies', () => {
    cy.get('input[type="search"]')
      .type('query')
      .should('have.value', 'query');
    cy.get('button')
      .contains('search')
      .click();

    cy.get('span[data-testid="status"]')
      .contains('movies found');
  });

  it('Select movie', () => {
    cy.get('ul[data-testid="films"] li:nth-child(2)')
      .click();

    cy.get('[data-testid="selected film"]');
  });

  it('Turn back to empty results', () => {
    cy.get('[data-testid="initial search"]')
      .click();

    cy.get('input[type="search"]');
    cy.get('ul[data-testid="films"]')
      .should('not');
  });
});
