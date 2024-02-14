describe('Página de Login', () => {
    it('Preencher os campos da página de login corretamnte para entrar no sistema', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.get('[data-test="loginUserName"]').type('andi')
      cy.get('[data-test="loginPassword"]').type('saude123')
      cy.contains('button', 'login ').click();

    })
  })
  