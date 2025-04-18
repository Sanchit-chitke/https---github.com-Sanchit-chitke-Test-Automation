describe('Product Filtering - Low to High', () => {
  before(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Applies Low to High filter, checks order, and logs product names', () => {
    cy.get('.product_sort_container').select('lohi');

    
    cy.wait(500); 

    cy.get('.inventory_item_price').then(($prices) => {
      const priceValues = [...$prices].map(el =>
        parseFloat(el.innerText.replace('$', ''))
      );
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices); 
      console.log('✅ Prices are sorted Low to High:', priceValues);
    });

    
    cy.get('.inventory_item_name').then(($names) => {
      const productNames = [...$names].map(el => el.innerText.trim());
      console.log('📦 Products after Low to High sorting:');
      productNames.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
      });
    });
  });
});
