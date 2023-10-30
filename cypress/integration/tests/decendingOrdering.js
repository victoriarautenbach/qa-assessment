/// <reference types="Cypress" />

describe('decending', function()
{

it('decending ordering', function()   {


cy.visit("http://localhost:3000")

cy.get('input[id=user-name]').type('standard_user')
cy.get('input[id=password').type('secret_sauce')

cy.wait(2000)
cy.get('input[id=login-button').click()

cy.url().should('include', '/inventory.html')


cy.get('select').select('hilo')
cy.get('select[class=product_sort_container]').should('contain','Price (high to low')



} )
} )
