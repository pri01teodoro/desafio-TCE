import { pessoas } from "../../../../dados";

export default function PessoasId(req, res) {

    const { id } = req.query;

    const pessoaFiltrada = pessoas.
        find(p => p.id == id)

    return res.status(200).json(pessoaFiltrada)
}