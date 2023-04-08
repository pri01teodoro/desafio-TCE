import { describe, expect, it, jest, beforeEach, afterAll, afterEach } from '@jest/globals';
import mongoose from "mongoose";
import app from '../../app';
import request from "supertest";

/*
  .get("/pessoa", AuthMidleware, pessoaController.listarPessoa)
  .get("/pessoa/:id", AuthMidleware, pessoaController.listarPessoaPorId)
  .post("/pessoa", AuthMidleware, pessoaController.cadastrarPessoa)
  .patch("/pessoa/:id", AuthMidleware, pessoaController.atualizarPessoa)
  */

let server
let token = false;
let idPessoa;

beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

afterAll(() => {
    mongoose.connection.close();
});
const dataPessoa = new Date();


describe('/POST em pessoa', () => {

    it("Deve cadastrar uma pessoa", async () => {
        const dataPessoa = new Date()
        const dados = await request(app)
            .post('/pessoas')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'aplication/json')
            .send({
                nome: 'Priscila Teodoro',
                filiacao: {
                    mae: "Maria Teodoro",
                    pai: "João Teodoro",
                },
                dataNascimento: dataPessoa,
                cpf: '064.779.292-18',
                cep: '76982-136',
                logradouro: 'Rua Maranhão',
                numero: 2034,
                bairro: 'Jardim das Flores',
                cidade: 'Vilhena',
                estado: 'RO',
                email: 'priscila.teodoro@gmail.com',
                telefone: '(69) 9 9999-9999',
            })
            .expect(201);
        idPessoa = dados._body._id;
    });
});


describe('/GET em pessoa', () => {
    it("Deve retornar uma lista de Pessoa", async () => {
        const dados = await request(app)
            .get('/pessoas')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'aplication/json')
            .expect(200);
        expect(dados._body.docs[9].cidade).toEqual('Vilhena');
    });
});

describe('/GET/ID em pessoa', () => {
    it("Deve retornar uma pessoa por ID ", async () => {
        const dados = await request(app)
            .get(`/pessoas/${idPessoa}`)
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'aplication/json')
            .expect('content-type', /json/)
            .expect(200);
        expect(dados._body.cidade
        ).toEqual('Vilhena');
    });

    it("Deve retornar erro de ID invalido ", async () => {
        const dados = await request(app)
            .get('/pessoas/robinho')
            .set('Authorization', `Bearer ${token}`)
            .expect(400);
        expect(dados._body.message).toEqual('ID inválido');
    });
});

describe('/PACTH/ID em pessoa', () => {
    it("Deve atualizar pessoa cadastrada", async () => {
        const dados = await request(app)
            .put(`/pessoas/${idPessoa}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                nome: 'Priscila Teodoro',
                filiacao: {
                    mae: "Maria Teodoro",
                    pai: "João Teodoro",
                },
                dataNascimento: dataPessoa,
                cpf: '064.779.292-40',
                cep: '76982-136',
                logradouro: 'Rua Maranhão',
                numero: 2034,
                bairro: 'Jardim das Flores',
                cidade: 'Vilhena',
                estado: 'RO',
                email: 'priscila.teodoro@gmail.com',
                telefone: '(69) 9 9999-9999',
            })
            .expect(200);

        expect(dados._body.message).toEqual('Pessoa atualizada com sucesso');
    });
});

describe('/DELETE/ID em pessoa', () => {
    it("Deve deletar pessoa cadastrado", async () => {
        const dados = await request(app)
            .delete(`/pessoas/${idPessoa}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });
});