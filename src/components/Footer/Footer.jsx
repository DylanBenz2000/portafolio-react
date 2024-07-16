import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.footerTitle}>© Dylan Ramos 2023</p>
            </div>
        </footer>
    )
}

export default Footer