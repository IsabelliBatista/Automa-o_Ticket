import 'cypress-iframe'
// import { cnpj } from 'cpf-cnpj-validator';

describe('Testando newsletter blog', () =>{
    it('home', () =>{
        cy.visit('/blog/');
       
    })
    // it('Preenchendo newsletter', () => {
    //     cy.window() 
    //         .then((win) => {
    //             cy.get('#ssf_MzK1MEkzNEzVTTY0T9U1MTC00E0yNLbUTbVMTTYyM08yMDBKBQA')
    //             cy.get('input[placeholder=Nome]')
                
    //     })
    // });
    it('Preenchendo newsletter', () => {
        cy.get('#ssf_MzK1MEkzNEzVTTY0T9U1MTC00E0yNLbUTbVMTTYyM08yMDBKBQA')
        .then(($iframe) => {
            const $body = $iframe.contents().find('#form_2584f11e-c17e-4018-b139-e9ec267b002e')

            cy.wrap($body)
            .find('input[placeholder=Nome]')
            .type('teste')
            cy.wrap($body)
            .find('input[placeholder=E-mail]')
            .type('isabelli_qa@osbr.com')
            cy.wrap($body)
            .find('.button-330918915').first().click().wait(20000)
            .should('strong', 'Obrigado')
        })
    });
    // it('Preenchendo newsletter', () => {
    //     cy.get('#ssf_M01LMrY0NrDQNTM2s9Q1MTcy000yMTbTNUkzTjRMNE5MMjI1AAA')
    //     .then(($iframe) => {
    //         const $body = $iframe.contents().find('#form_5fb39308-6369-4726-b436-4f3a1a3ab250')

    //         cy.wrap($body)
    //         .find('input[placeholder=Nome]')
    //         .type('teste')
    //         cy.wrap($body)
    //         .find('input[placeholder=E-mail]')
    //         .type('isabelli_qa@osbr.com')
    //         cy.wrap($body)
    //         .find('input[placeholder=Telefone]')
    //         .type('5511975994324')
    //         cy.wrap($body)
    //         .find('input[placeholder=CNPJ]')
    //         .type('11.450.142/5140-14')
    //         cy.wrap($body)
    //         .find('button').children('.button-328594435').click()
    //     })
    // });
   
    
})