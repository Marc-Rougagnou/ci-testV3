describe('Compteur React', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Assure-toi que ton app tourne sur ce port
  });

  it('Add to the counter', () => {
    cy.contains('Add').click();
    cy.contains('Counter : 1');
  });

  it('Reduce the counter', () => {
    cy.contains('Reduce').click();
    cy.contains('Counter : -1');
  });
});
