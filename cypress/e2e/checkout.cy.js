describe('Checkout Process', () => {
    before(() => {
      cy.visit('/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.product_sort_container').select('lohi');
      cy.get('.inventory_item').first().contains('ADD TO CART').click();
      cy.get('.shopping_cart_link').click();
    });
  
    it('Completes the checkout process', () => {
      cy.contains('CHECKOUT').click();
      cy.url().should('include', 'checkout-step-one');
      
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      
      cy.get('input[value="CONTINUE"]').click();
      

      cy.contains('a.cart_button', 'FINISH').should('be.visible').click();

      cy.url().should('include', 'checkout-complete');
      cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');



    });
  });
  


