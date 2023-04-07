import mongoose from 'mongoose';

const pessoaSchema = new mongoose.Schema(

    {
        nome: { 
            type: String, 
            maxlength: 200, 
            required: true 
        },
        
        // filiacao: { 
        //     type: String, 
        //     required: true
        // },

        filiacao: [
            {
                mae: { type: String, required: true },
                pai: { type: String, required: false },
            }
        ],

        dataNascimento: { 
            type: Date, 
            required: true
        },

        cpf: { 
            type: Number, 
            maxlength: 14, 
            required: true, 
            trim: true
        },
        
        cep: { 
            type: Number,
            maxlength: 8,
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
            type: String , 
            required: true
        },

        cidade: { 
            type: String,
            required: true 
        },

        estado: { 
            type: String , 
            required: true
        },

        email: {
            type: String,
            required: true,
            trim: true
        },

        telefone: { 
            type: Number , 
            required: true,
            trim: true
        },
        
    },
    { versionKey: false }

);

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

export default Pessoa;