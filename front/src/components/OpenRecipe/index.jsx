import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./OpenRecipe.module.css"

import axios from "axios";

export default function OpenRecipe(titulo) {

    const router = useRouter();
    const { id } = router.query

    const [receita, setReceita] = useState
        ({});

    useEffect(() => {
        //Consultar API
        axios.get(`/api/receitas/${id}`)
            .then(resposta => setReceita
                (resposta.data));
    }, [router])

    return (
        <>

            <div>
                <img className={styles.container__img} src={receita.capaImg} alt={receita.descricao} />
                <h1 className={styles.box__title}>{receita.titulo}</h1>
            </div>
            <main className={styles.container__main}>
                <div className={styles.container__icon}>
                    <div className={styles.icon}>
                        <img src="/relogio.svg" alt="ícone de um relógio" />
                        {receita.tempoPreparo} minutos
                    </div>

                    <div className={styles.icon}>
                        <img src="/comida.svg" alt="ícone de um relógio" />
                        {receita.porcoes} porções
                    </div>
                </div>
                <h1 className={styles.subtitle}>Ingredientes</h1>
                <div className={styles.container__ingr}>
                    <li className={styles.ingredientes}>Ovos</li>
                    <li className={styles.ingredientes}>Arroz</li>
                    <li className={styles.ingredientes}>Pepino</li>
                    <li className={styles.ingredientes}>Sal</li>
                    <li className={styles.ingredientes}>Alho</li>

                </div>
                <h1 className={styles.subtitle}>Modo de Preparo</h1>
                <div className={styles.preparo}>
                    <p>{receita.preparo1}</p>
                    <p>{receita.preparo2}</p>
                    <p>{receita.preparo3}</p>   
                </div>

                <div className={styles.fonte}>
                    <div>Fonte: Tudo Gostoso</div>
                    <p>Link</p>
                </div>
            </main>




        </>
    )
}