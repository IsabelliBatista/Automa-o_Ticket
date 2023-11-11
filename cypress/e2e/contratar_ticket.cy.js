import { cnpj } from 'cpf-cnpj-validator';

describe('Testando formulários de empresas', () =>{
    it('home', () =>{
        cy.visit('/contratar-ticket/');
       
    })
    // it('seleciona tutorial', () => {
    //     cy.get('.modal-body > .active > .actions > .skip-tutorial').click()
    // });
    it('Preencher Form Contratar', () => {
        cy.get('.elementor-element-ca79f21 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('#form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('#form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('#form-field-form_leads_phone').type('81985612679')
        cy.get('#form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    }); 
    it('Selecionar página de Ticket Plus', () => {
        cy.get('#menu-item-5395 > #chevron-right').click() 
        cy.get('#menu-item-5412 > a').click()
        // cy.contains('h1', 'Ticket Plus: multiplique o poder de compra de seus colaboradores com o adiantamento salarial.')
    });
    it('Preencher formulário de empresa Ticket Plus', () => {
        cy.get('.elementor-element-4b31458 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-4b31458 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-4b31458 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-4b31458 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-4b31458 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('ticket restaurante', () =>{
        cy.visit('/contratar-ticket/cartao-vale-refeicao/ticket-restaurante/');
    })
    it('Preencher formulário de empresa Ticket Restaurante', () => {
        cy.get('.elementor-element-216d4079 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-216d4079 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-216d4079 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-216d4079 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-216d4079 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('ticket alimentação', () =>{
        cy.visit('/contratar-ticket/cartao-vale-alimentacao/ticket-alimentacao/');
    })
    it('Preencher formulário de empresa Ticket Alimentação', () => {
        cy.get('.elementor-element-4e63954a #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-4e63954a #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-4e63954a #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-4e63954a #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-4e63954a .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Cartão RH', () =>{
        cy.visit('/contratar-ticket/cartao-pre-pago-rh/');
    })
    it('Preencher formulário de cartão RH', () => {
        cy.get('.elementor-element-5229429 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-5229429 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-5229429 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-5229429 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-5229429 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Seguros', () =>{
        cy.visit('/contratar-ticket/cartao-vale-alimentacao/ticket-seguros/');
    })
    it('Preencher formulário de Ticket Seguros', () => {
        cy.get('.elementor-element-352849e #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-352849e #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-352849e #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-352849e #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-352849e .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Natal', () =>{
        cy.visit('/contratar-ticket/cartao-vale-alimentacao/ticket-natal/');
    })
    it('Preencher formulário de Ticket Natal', () => {
        cy.get('.elementor-element-a586e5f #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-a586e5f #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-a586e5f #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-a586e5f #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-a586e5f .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Flex', () =>{
        cy.visit('/contratar-ticket/ticket-flex/');
    })
    it('Preencher formulário de Ticket Flex', () => {
        cy.get('.elementor-element-a14397a #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-a14397a #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-a14397a #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-a14397a #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-a14397a .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Super Flex', () =>{
        cy.visit('/contratar-ticket/ticket-super-flex/');
    })
    it('Preencher formulário de Ticket Super Flex', () => {
        cy.get('.elementor-element-12abc06 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-12abc06 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-12abc06 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-12abc06 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-12abc06 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Transporte', () =>{
        cy.visit('/contratar-ticket/cartao-vale-transporte/ticket-transporte/');
    })
    it('Preencher formulário de Ticket Transporte', () => {
        cy.get('.elementor-element-740a3d1 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-740a3d1 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-740a3d1 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-740a3d1 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-740a3d1 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Presente Perfeito', () =>{
        cy.visit('/contratar-ticket/cartao-vale-presente/ticket-presente-perfeito/');
    })
    it('Preencher formulário de Ticket Presente Perfeito', () => {
        cy.get('.elementor-element-ca1a46a #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-ca1a46a #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-ca1a46a #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-ca1a46a #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-ca1a46a .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Duo Card', () =>{
        cy.visit('/contratar-ticket/cartao-vale-presente/ticket-duo-card/');
    })
    it('Preencher formulário de Ticket Duo Card', () => {
        cy.get('.elementor-element-c2a4838 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-c2a4838 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-c2a4838 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-c2a4838 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-c2a4838 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
    it('Ticket Cultura', () =>{
        cy.visit('/contratar-ticket/cartao-vale-cultura/ticket-cultura/');
    })
    it('Preencher formulário de Ticket Cultura', () => {
        cy.get('.elementor-element-aaf0d12 #form-field-form_leads_name').type('[teste] Isabelli Contratar teste')
        cy.get('.elementor-element-aaf0d12 #form-field-form_leads_mail').type('teste_isa_qa@gmail.com')
        cy.get('.elementor-element-aaf0d12 #form-field-form_leads_phone').type('81985612679')
        cy.get('.elementor-element-aaf0d12 #form-field-form_leads_cnpj').type(cnpj.generate())
        cy.get('.elementor-element-aaf0d12 .elementor-field-type-submit > .elementor-button').click()
        cy.wait(20000)
        cy.get('.elementor-message').should("have.text", "Sua mensagem foi enviada Em breve entraremos em contato por e-mail ou telefone para respondê-lo.")
    });
})