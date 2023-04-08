import { describe, expect, it, jest, } from '@jest/globals';
import Pessoa from '../../models/Pessoa.js';
import PessoaController from '../../controllers/pessoasController.js';
import mongoose from 'mongoose';

describe('Deve retornar teste de unidade de pessoa', () => {
    afterEach(() => jest.clearAllMocks());
    const dataPessoa = new Date();

    const objetoPessoa = {
        nome: 'Priscila Teodoro',
        filiacao: {
            mae: "Maria Teodoro",
            pai: "João Teodoro",
        },
        dataNascimento: dataPessoa,
        cpf: '064.779.292-36',
        cep: '76982-136',
        logradouro: 'Rua Maranhão',
        numero: 2034,
        bairro: 'Jardim das Flores',
        cidade: 'Vilhena',
        estado: 'RO',
        email: 'priscila.teodoro@gmail.com',
        telefone: '(69) 9 9999-9999',
    };

    it('Deve instanciar um nova pessoa', () => {
        const pessoa = new Pessoa(objetoPessoa);
        expect(pessoa).toEqual(expect.objectContaining(objetoPessoa));
        expect(pessoa).toHaveProperty('cidade', 'Vilhena');
    });


    it('Deve fazer uma chamada simulada de cadastro ao BD', () => {
        const pessoa = new Pessoa(objetoPessoa);
        PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
            nome: 'Priscila Teodoro',
            filiacao: {
                mae: "Maria Teodoro",
                pai: "João Teodoro",
            },
            dataNascimento: dataPessoa,
            cpf: '064.779.292-36',
            cep: '76982-136',
            logradouro: 'Rua Maranhão',
            numero: 2034,
            bairro: 'Jardim das Flores',
            cidade: 'Vilhena',
            estado: 'RO',
            email: 'priscila.teodoro@gmail.com',
            telefone: '(69) 9 9999-9999',
        });
        const retorno = PessoaController.cadastrarPessoa();
        expect(retorno).toEqual(expect.objectContaining({ dataNascimento: expect.any(Date), ...objetoPessoa }));
    });
});