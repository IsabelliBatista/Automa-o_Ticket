describe('Testando form de campanhas', () =>{
    it('home', () =>{
        cy.visit('/meus-servicos/campanha-ticket-plus/');
       
    })
    it('Preencher form', () => {
        cy.clearLocalStorage() 
        cy.get('#form-field-cpf').type('269.431.450-37')
        cy.get('#form-field-digitosCartao').type('0011')
        cy.get('.elementor-button').click()
        cy.wait(10000)
        cy.get('#form-field-email').clear().type('teste@teste.com')
        cy.get('#form-field-telefoneCelular').clear().type('81985612679')
        cy.get('.elementor-button').click()
        cy.wait(10000)
        cy.contains('.form-finish > .title', 'Seus dados foram enviados com sucesso!').should('be.visible')
    });
})