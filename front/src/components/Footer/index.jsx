import styles from "./Footer.module.css"

export default function Footer(){

    return (
        <footer className={styles.card}>
            <div className={styles.container}>
                <div className={styles.container__font}>
                    <div className={styles.font}>© 2023 - Todos os direitos reservados</div> 
                </div>
            </div>
        </footer>
    )
}