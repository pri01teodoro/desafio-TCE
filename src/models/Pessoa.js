import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';


const pessoaSchema = new mongoose.Schema(

    {
        nome: {
            type: String,
            required: true
        },
        // filiacao: { 
        //     type: String, 
        //     required: true
        // },
        filiacao: { // nem todas as pessoas possuem o registro do pai, por isso não é um campo obrigatório, porém o da mãe sim
            mae: { type: String, required: true },
            pai: { type: String, required: false },
        },

        dataNascimento: {
            type: Date,
            required: true
        },

        cpf: {
            type: String,
            maxlength: 14,
            required: true,
            trim: true
        },

        cep: {
            type: String,
            maxlength: 9,
            required: true,
            trim: true
        },

        logradouro: {
            type: String,
            required: true
        },

        numero: {
            type: Number,
            required: true,
            trim: true
        },

        bairro: {
            type: String,
            required: true
        },

        cidade: {
            type: String,
            required: true
        },

        estado: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        },

        telefone: {
            type: String,
            required: true,
            trim: true
        },

    },
    { versionKey: false }

);

pessoaSchema.plugin(mongoosePaginate);
const Pessoa = mongoose.model('Pessoa', pessoaSchema);



export default Pessoa;