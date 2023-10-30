/// <reference types="Cypress" />

describe('adding to cart', function()
{

it('adding to cart', function()   {


cy.visit("http://localhost:3000")

cy.get('input[id=user-name]').type('standard_user')
cy.get('input[id=password').type('secret_sauce')

cy.wait(2000)
cy.get('input[id=login-button').click()

cy.url().should('include', '/inventory.html')


cy.get('select').select('hilo')
cy.get('select[class=product_sort_container]').should('contain','Price (high to low')

cy.get('.inventory_item:visible').should('have.length', 6)

cy.get('.inventory_list').find('.inventory_item').should('have.length', 6)
cy.get('.inventory_list').find('.inventory_item').eq(0).contains('Add to cart').click()

cy.get('.inventory_list').find('.inventory_item').eq(5).contains('Add to cart').click()

cy.get('.shopping_cart_link').click()

cy.get('.title').should('contain','Your Cart')

cy.get('.cart_list').find('.inventory_item_name').should('have.length', 2)
cy.get('.cart_list').find('.inventory_item_name').eq(0).contains('Sauce Labs Fleece Jacket')
cy.get('.cart_list').find('.inventory_item_name').eq(1).contains('Sauce Labs Onesie')

cy.get('button[id=checkout]').click()

cy.get('input[id=first-name]').type('Shivar')
cy.get('input[id=last-name]').type('Ram')
cy.get('input[id=postal-code]').type('7441')

cy.get('input[id=continue]').click()

cy.get('.title').should('contain','Checkout: Overview')

cy.get('button[id=finish]').click()
cy.get('.title').should('contain','Checkout: Complete!')

} )
} )
