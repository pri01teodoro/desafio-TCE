import styles from "../Button/Button.module.css"

export default function Botao() {

    return (
        <div className={styles.container__button}>
            <input className={styles.input} type="submit" value="SALVAR"/>
            <input className={styles.input} type="submit" value="CANCELAR"/>

        </div>

    )
}

