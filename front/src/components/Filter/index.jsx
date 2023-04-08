import styles from "./Filter.module.css";


// export default function Form({id, titulo, tempoPreparo, porcoes, imagem, descricao}){

export default function Filter({ nome, cpf, }) {
    return (

        <div className={styles.container__form}>
            <div className={styles.container__title}>
                <img src="/list.svg" alt="Ícone de uma lista"/>
                <h1 className={styles.title}>LISTAGEM</h1>
            </div>

            <p className={styles.title__filtro}>Filtros</p>

            <div className={styles.container__input}>
                <label className={styles.label}>Nome</label>
                <input className={styles.input} type="text" id="nome" />

                <label className={styles.label}>CPF</label>
                <input className={styles.input} type="text" id="cpf" />

                <div className={styles.container__button}>
                    <input className={styles.inputButton} type="submit" value="BUSCAR"/>


                 </div>

                
            </div>
        </div>
    )
}