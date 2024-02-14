describe('Página de login', () => {
    it('Verificar mensagens de campos obrigatórios no login', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })