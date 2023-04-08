import styles from "./Header.module.css"

export default function Header() { 

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a href="#" className={styles.header__title}>CADASTRO</a>
                <a href="#" className={styles.header__title}>LISTAGEM</a>
            </div>

        </header>

    )
}


