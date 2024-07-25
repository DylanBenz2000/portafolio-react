import styles from './CajaHabilidades.module.css'

const CajaHabilidades = ({children, color}) => {
    return(
        <div className={styles.cuadroHabilidades} style={{ '--hover-color': color }}>
            {children}
        </div>
    )
}

export default CajaHabilidades