const el = require ("./Elements.cy").ELEMENTS;
class Cadastro {

    AcessarCadastro(){
        cy.viewport(412, 823);
        cy.visit(el.url);
        cy.get(el.name).type('Johnny Cage');
        cy.get(el.email).type('Johnnycage@email.com');
        cy.get(el.button1).click();
    }

    EscolherGenero(){
        cy.get(el.genero).check();
    }

    PreencherSenha(){
        cy.get(el.password).type('abc123');
        cy.scrollTo('0%', '30%');
    }

    DataNascimento(){
        cy.get(el.dia).select('24');
        cy.get(el.mes).select('March');
        cy.get(el.ano).select('2004');
    }

    NomeSobrenome(){
        cy.get(el.nome).type('Johnny');
        cy.get(el.sobrenome).type('Cage');
    }

    Endereço(){
        cy.get(el.rua).type('Rua Almirante Uchoa, 428');
        cy.get(el.país).select(4);
        cy.get(el.estado).type('Azerbaijão');
        cy.get(el.cidade).type('Konoha');
        cy.get(el.cep).type('54147996');
    }

    Telefone(){
        cy.get(el.numero).type('(66)941335247');
    }

    Cadastrar(){
        cy.get(el.button2).click();
        cy.get(el.resultado).should('be.visible').and('have.text', 'Account Created!');
    }

}

export default new Cadastro();