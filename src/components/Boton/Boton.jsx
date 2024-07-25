import styles from './Boton.module.css'

const Boton = ({ children, type = 'button', ...props }) => {
    return(
        <button className={styles.button} type={type} {...props}>
            {children}
        </button>
    )
}

export default Boton