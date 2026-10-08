describe('Zargar Application', () => {

  it('should login successfully', () => {

    cy.visit('/')

    cy.get('#username')
      .type('USERNAME')

    cy.get('#password')
      .type('PASSWORD')

    cy.contains('button', 'ورود')
      .click()

    cy.url()
      .should('not.include', '/login')

  })

})