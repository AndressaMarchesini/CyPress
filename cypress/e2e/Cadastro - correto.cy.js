describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('andressagmo.am@gmail.com')
    cy.get('[data-test="fullName"]').type('Andressa Marchesini')
    cy.get('[data-test="registerUserName"]').type('andi')
    cy.get('[data-test="registerPassword"]').type('saude123')
    cy.contains('button', 'Register').click();
  })
})
