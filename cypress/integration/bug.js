/// <reference types="cypress" />

context('Cypress bug', () => {

  it('Has the bug', () => {
    cy.visit('https://cobiro.com')
  })
})
