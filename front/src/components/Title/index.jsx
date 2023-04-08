import styles from "./Title.module.css";


// export default function Form({id, titulo, tempoPreparo, porcoes, imagem, descricao}){

export default function Title() {
    return (
        <div className={styles.container}>
            <div className={styles.container__form}>
                <div className={styles.container__title}>
                    <img src="/user.svg" alt="Ícone de um usuário"/>
                    <h1 className={styles.title}>CADASTRO</h1>
                </div>
            </div>

            <p className={styles.title__info}>Informações pessoais</p>
        </div>
    )
}