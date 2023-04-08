import Pessoa from "../models/Pessoa.js";


class PessoasController {

    // GET - Listar todas as Pessoas || por nome || por cpf 

    static listarPessoas = async (req, res) => {
        try {
            const cpf = req.query.cpf;
            const nome = req.query.nome;
            const page = req.query.page;
            const perPage = req.query.perPage;
            

            // limitar a quantidade máxima por requisição
            const options = {
                page: parseInt(page) || 1,
                limit: parseInt(perPage) > 10 ? 10 : parseInt(perPage) || 10
            }

            // Buscar tudo por falta de parâmetro
            if (!cpf && !nome) {
                const pessoa = await Pessoa.paginate({}, options);
                return res.json(pessoa);
            }

            // Busca por CPF 
            if (!nome) {
                const pessoa = await Pessoa.paginate({ cpf: new RegExp(cpf, 'i') }, options);
                return res.json(pessoa);
            }
            // Busca por nome 
            if (!cpf) {
                const pessoa = await Pessoa.paginate({ nome: new RegExp(nome, 'i') }, options);
                return res.json(pessoa);
            }

            // Busca por CPF e nome
            if (cpf && nome) {
                const pessoa = await Pessoa.paginate({ $and: [{ cpf: new RegExp(cpf, 'i') }, { nome: new RegExp(nome, 'i') }] }, options);
                return res.json(pessoa);
            }

        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
        }
    }

    // GET - Listar Pessoa por ID
    static listarPessoaPorId = async (req, res) => {
        try {
            const id = req.params.id;

            Pessoa.findById(id)
                .then(pessoa => {
                    if (!pessoa) {
                        return res.status(400).json({ error: true, code: 404, message: "Pessoa não encontrada" })
                    }
                    return res.json(pessoa)
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(400).json({ error: true, code: 404, message: "ID inválido" })
                    }
                    return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
                }
                )
        } catch (err) {
            return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
        }
    }

    // POST - Cadastrar Pessoa
    static cadastrarPessoa = async (req, res) => {

        try {
            const { nome, filiacao, dataNascimento, cpf, cep, logradouro, numero, bairro, cidade, estado, email, telefone } = req.body;

            const novaPessoa = new Pessoa({
                nome,
                filiacao,
                dataNascimento,
                cpf,
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                email,
                telefone
            });

            const erros = [];

            // Verificar se CPF já existe
            if (req.body.cpf) {
                const cpfExist = await Pessoa.find({ "cpf": { "$eq": req.body.cpf } });
                if (cpfExist[0]) {
                    erros.push({ message: "CPF já cadastrado para " + cpfExist[0].nome })
                }
            }

            // Retorno se CPF já existir para outra pessoa
            if (erros.length > 0) {
                return res.status(400).json({ error: true, code: 400, message: erros });
            }

            await novaPessoa.save();
            res.status(201).send(novaPessoa.toJSON());

        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
        }
    }

    //PUT - Atualizar Pessoa por ID
    static atualizarPessoa = async (req, res) => {
        try {
            const id = req.params.id;
            const erros = [];
            const pessoa = Pessoa.findById(id)

            if (!pessoa) {
                return res.status(404).json({ message: "Cadastro não encontrado" })
            }

            //Verificar se CPF já está cadastrado para outra pessoa
            if (req.body.cpf) {
                // buscar outra pessoa com o CPF passado na atualização, se houver
                const cpfExist = await Pessoa.findOne({ _id: { $ne: id }, cpf: req.body.cpf });

                if (cpfExist) {
                    erros.push({ message: "CPF já cadastrado para " + cpfExist.nome })
                }
            }
            // Retorno se CPF ou NIT já existir para outra pessoa
            if (erros.length > 0) {
                return res.status(400).json({ error: true, code: 400, message: falhas });
            }

            //Atualizar caso não encontre erro 
            await Pessoa.findByIdAndUpdate(id).then(pessoa => {
                pessoa.nome = req.body.nome;
                pessoa.filiacao = req.body.filiacao;
                pessoa.dataNascimento = req.body.dataNascimento;
                pessoa.cpf = req.body.cpf;
                pessoa.cep = req.body.cep;
                pessoa.logradouro = req.body.logradouro;
                pessoa.numero = req.body.numero;
                pessoa.bairro = req.body.bairro;
                pessoa.cidade = req.body.cidade;
                pessoa.estado = req.body.estado;
                pessoa.email = req.body.email;
                pessoa.telefone = req.body.telefone;

                pessoa.save();
                return res.status(200).json({ error: false, code: 200, message: "Pessoa atualizada com sucesso" })
            }
            ).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).json({ error: true, code: 404, message: "Pessoa não encontrada" })
                }
                return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
            }
            )

        }
        catch (err) {
            return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
        }
    }

    // DELETE - Deletar Pessoa por ID

    static deletarPessoa = async (req, res) => {
        try {

            // retorno da busca desejada
            const id = req.params.id;

            await Pessoa.findByIdAndDelete(id)
                .then(pessoa => {
                    if (!pessoa) {
                        return res.status(404).json({ error: true, code: 404, message: "Pessoa não encontrada" })
                    }
                    return res.status(200).json({ error: false, code: 200, message: "Pessoa deletada com sucesso" })
                }
                ).catch(err => {
                    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                        return res.status(404).json({ error: true, code: 404, message: "Pessoa não encontrada" })
                    }
                    return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
                }  )
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: true, code: 500, message: "Erro interno do Servidor" })
        }


    }

}

export default PessoasController;

