import db from "../config/database.js";
import Pessoa from "../models/Pessoa.js";
import faker from 'faker-br';

// const pessoas2 = [
//     {
//         "nome": "Maria Carvalho",
//         "filiacao": "Joana Carvalho",
//         "dataNascimento": 19930101,
//         "cpf": 58191593220,
//         "cep": 76998000,
//         "logradouro": "Rua A",
//         "numero": 3940,
//         "bairro": "Centro",
//         "cidade": "Vilhena",
//         "estado": "RO",
//         "email": "maria_carvalho@gmail.com",
//         "telefone": 69984357900
//     },
//     {
//         "nome": "João Silva",
//         "filiacao": "Joana Silva", 
//         "dataNascimento": 19930101,
//         "cpf": 22269602269,
//         "cep": 76998000,
//         "logradouro": "Rua A",
//         "numero": 3940,
//         "bairro": "Centro",
//         "cidade": "Vilhena",
//         "estado": "RO",
//         "email": "maria_carvalho@gmail.com",
//         "telefone": 69984357900
//     },
//     {
//         "nome": "Ezequiel Tavares",
//         "filiacao": "Joana Tavares",
//         "dataNascimento": 19930101,
//         "cpf": 74548522204,
//         "cep": 76998000,
//         "logradouro": "Rua A",
//         "numero": 3940,
//         "bairro": "Centro",
//         "cidade": "Vilhena",
//         "estado": "RO",
//         "email": "maria_carvalho@gmail.com",
//         "telefone": 69984357900
//     }
// ]

const pessoas = [];
function seedPessoas(qtdpessoas) {
    for (let i = 1; i <= qtdpessoas; i++) {
        const pessoa =
        {
            nome: faker.name.findName(),
            filiacao: [{
                mae: faker.name.findName(),
                pai: faker.name.findName()
            }],
            dataNascimento: faker.date.past(),
            cpf: faker.br.cpf(),
            cep: faker.address.zipCode(),
            logradouro: faker.address.streetName(),
            numero: faker.address.streetAddress(),
            bairro: faker.address.county(),
            cidade: faker.address.city(),
            estado: faker.address.state(),
            email: faker.internet.email(),
            telefone: faker.phone.phoneNumber(),
        }
        pessoas.push(pessoa);
    }
}
seedPessoas(3);
await Pessoa.collection.insertMany(pessoas);
console.log(pessoas.length + ' pessoas inseridas!');



