import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>

            <nav>
            <h1 className={styles.titulo}>Dylan Ramos</h1>
                <ul className={styles.navList}>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header