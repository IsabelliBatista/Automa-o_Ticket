import { cnpj } from 'cpf-cnpj-validator';

describe('Testando formulários LP Itau Pro', () =>{
    it('home itau', () =>{
        cy.visit('/contratar-ticket/itau/');

    })
    it('achar texto', () => {
        cy.contains('.solicite', "Solicite uma Cotação").should('be.visible')
    });
    it('Preencher form', () => {
        cy.get('#form-field-lemp_name').type('[teste] Isabelli teste itau home')
        cy.get('#form-field-lemp_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-lemp_phone').type('81985612679')
        cy.get('#form-field-lemp_document').type(cnpj.generate())
        cy.get('#btn-form-envio').click()
        cy.wait(20000)
        cy.contains(".elementor-message", "Seu e-mail foi enviado com sucesso!").should('be.visible')
    });

    it('home itau pro', () =>{
        cy.visit('/contratar-ticket/itau-pro/');

    })
    it('achar texto', () => {
        cy.contains('.solicite', "Solicite uma Cotação").should('be.visible')
    });
    it('Preencher form', () => {
        cy.get('#form-field-lemp_name').type('[teste] Isabelli teste itau pro')
        cy.get('#form-field-lemp_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-lemp_phone').type('81985612679')
        cy.get('#form-field-lemp_phone_2').type('79983828444')
        cy.get('#form-field-lemp_document').type(cnpj.generate())
        cy.get('#btn-form-envio').click()
        cy.wait(20000)
        cy.contains(".elementor-message", "Seu e-mail foi enviado com sucesso!").should('be.visible')
    });
   
    it('home itau top', () =>{
        cy.visit('/contratar-ticket/itau-top/');
    })
    it('achar texto', () => {
        cy.contains('.solicite', "Solicite uma Cotação").should('be.visible')
    });
    it('Preencher form', () => {
        cy.get('#form-field-lemp_name').type('[teste] Isabelli teste itau top')
        cy.get('#form-field-lemp_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-lemp_phone').type('81985612679')
        cy.get('#form-field-lemp_phone_2').type('79983828444')
        cy.get('#form-field-lemp_document').type(cnpj.generate())
        cy.get('#btn-form-envio').click()
        cy.wait(20000)
        cy.contains(".elementor-message", "Seu e-mail foi enviado com sucesso!").should('be.visible')
    });
   

    it('home itau business', () =>{
        cy.visit('/contratar-ticket/itau-business/');
    })
    it('achar texto', () => {
        cy.contains('.solicite', "Solicite uma Cotação").should('be.visible')
    });
    it('Preencher form', () => {
        cy.get('#form-field-lemp_name').type('[teste] Isabelli teste business')
        cy.get('#form-field-lemp_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-lemp_phone').type('81985612679')
        cy.get('#form-field-lemp_phone_2').type('79983828444')
        cy.get('#form-field-lemp_document').type(cnpj.generate())
        cy.get('#btn-form-envio').click()
        cy.wait(20000)
        cy.contains(".elementor-message", "Seu e-mail foi enviado com sucesso!").should('be.visible')
    });
    it('home itau agro', () =>{
        cy.visit('/contratar-ticket/itau-agro/');
    })
    it('achar texto', () => {
        cy.contains('.solicite', "Solicite uma Cotação").should('be.visible')
    });
    it('Preencher form', () => {
        cy.get('#form-field-lemp_name').type('[teste] Isabelli teste agro')
        cy.get('#form-field-lemp_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-lemp_phone').type('81985612679')
        cy.get('#form-field-lemp_phone_2').type('79983828444')
        cy.get('#form-field-lemp_document').type(cnpj.generate())
        cy.get('#btn-form-envio').click()
        cy.wait(20000)
        cy.contains(".elementor-message", "Seu e-mail foi enviado com sucesso!").should('be.visible')
    });
   
})