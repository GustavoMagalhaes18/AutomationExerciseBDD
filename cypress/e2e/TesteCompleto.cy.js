import Cadastro from '../support/Pages/Cadastro/Actions.cy'
describe('Aprendendo Cypress', () => {
    
    beforeEach( () => {
        Cadastro.AcessarCadastro();
    });

    
    it('Primeiro Teste', () => {
        Cadastro.EscolherGenero();
        Cadastro.PreencherSenha();
        Cadastro.DataNascimento();
        Cadastro.NomeSobrenome();
        Cadastro.Endereço();
        Cadastro.Telefone();
        Cadastro.Cadastrar();
    });
    
    
});
