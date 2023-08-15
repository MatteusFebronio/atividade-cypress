describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
  
    cy.contains('Ir para o Cadastro').click()
    
    cy.get('input[placeholder="Nome Completo"]').type('testecypress@tuamaeaquelaursa.com')
    cy.get('input[placeholder="Email"]').type('testecypress@tuamaeaquelaursa.com')
    cy.get('input[placeholder="senha"]').type('testecypress@tuamaeaquelaursa.com')
    cy.get('input[placeholder="Confirme a senha"]').type('testecypress@tuamaeaquelaursa.com')

    cy.contains('Criar conta').click()

    cy.contains('Você está logado!').should("be.visible")

  })

  it.only('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.get('input[placeholder="Email"]').type('cypress@teste.com')
    cy.get('input[placeholder="senha"]').type('cypress')

    cy.get('button[type="submit"]').click()

    cy.contains('Você está logado!').should("be.visible")

  })
})