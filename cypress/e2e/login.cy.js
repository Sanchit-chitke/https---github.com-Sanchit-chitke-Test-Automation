describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Validates homepage load after login with valid credentials', () => {
      cy.fixture('credentials').then((users) => {
        users.forEach((user) => {
          cy.get('#user-name').clear().type(user.username);
          cy.get('#password').clear().type(user.password);
          cy.get('#login-button').click();
  
          if (user.username === 'standard_user') {
            cy.url().should('include', 'inventory');
            cy.get('.inventory_list').should('be.visible');
            cy.visit('/'); 
          } else {
            cy.get('[data-test="error"]').should('be.visible');
          }
        });
      });
    });
  });
  