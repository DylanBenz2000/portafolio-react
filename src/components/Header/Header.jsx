import styles from './Header.module.css';

const Header = () => {
    return(
        

            <nav className={styles.navbar} >
                <h1 className={styles.titulo}>Dylan Ramos</h1>
                <ul className={styles.navList}>
                    <li><a href="#proyectos">Projects</a></li>
                    <li><a href="#acercade">About</a></li>
                    <li><a href="#contacto">Contact</a></li>
                </ul>
            </nav>

        
    )
}

export default Header