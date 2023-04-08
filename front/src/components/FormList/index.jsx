import { useEffect, useState } from "react";
import Form from "../Form";
import styles from "../FormList/FormList.module.css";
import axios from "axios";

export default function FormList() {

    const [form, setForm] = useState([]);


    useEffect(() => {
        axios.get('/api/receitas').then(resposta => setForm(resposta.data)); //data serve para pegar os dados
    }, []); //o [] vazio engloba tudo


    // return (
    //     <div className={styles.formList}>
    //         {form.map(pessoa => (
    //             <Form
    //                 key={pessoa.id}
    //                 id={pessoa.id}
    //                 nome={pessoa.nome}
    //                 cpf={pessoa.cpf}
    //                 dataNascimento={pessoa.dataNascimento}
    //                 filiacao={pessoa.filiacao}
    //                 cep={pessoa.cep}
    //                 logradouro={pessoa.logradouro}
    //                 numero={pessoa.numero}
    //                 bairro={pessoa.bairro}
    //                 cidade={pessoa.cidade}
    //                 estado={pessoa.estado}
    //                 email={pessoa.email}
    //                 telefone={pessoa.telefone}

    //             />
    //         ))}

    //     </div>
    // )
}