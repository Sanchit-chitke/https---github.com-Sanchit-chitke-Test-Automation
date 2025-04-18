describe('Cart Operations', () => {
    before(() => {
      cy.visit('/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Adds a product to cart and validates', () => {
      cy.get('.product_sort_container').select('lohi');
      cy.get('.inventory_item').first().within(() => {
        cy.contains('ADD TO CART').click();
      });
      cy.get('.shopping_cart_badge').should('have.text', '1');
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 1);
    });
  });
  