import styles from "./List.module.css"


 

export default function List({nome, cpf}) {

    return (
        
        <div className={styles.container__table}>
            <div className={styles.container__titulo}>
                <h1 className={styles.titulo}>Nome</h1>
                <div className={styles.separacao}></div>
                <h1 className={styles.titulo}>CPF</h1>
                <div className={styles.separacao}></div>
            </div>

            <div className={styles.corpo1}>
                <p className={styles.pcorpo}>{nome}</p>
                <p className={styles.pcorpo}>{cpf}</p>
                <div className={styles.vetor}>
                    <img src="/edit.svg" alt="" style={{marginRight: 16}} />
                    <img src="/delete.svg" alt=""/>
                </div>
            </div>
            
        </div>

    )
}