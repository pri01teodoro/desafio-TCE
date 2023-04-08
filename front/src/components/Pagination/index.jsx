import styles from "./Pagination.module.css"

export default function Pagination({link, numero}) {
    
    return (
        <div className={styles.paginacao}>
            <div className={styles.box__paginacao}>
                <a href={link}>{numero}</a>
            </div>
        </div>
    )
}