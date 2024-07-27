import styles from './Habilidades.module.css'
import CajaHabilidades from '../CajaHabilidades/CajaHabilidades'

const Habilidades = () => {
    return(
        <section className={styles.containerHabilidades}>
            <h1>Habilidades</h1>
            <div className={styles.habilidades}>
                <div className={styles.parrafo}>
                    <p>Siempre estoy buscando adquirir nuevas habilidades e ir actualizando las tecnologías o librerías que uso. Estas son habilidades que actualmente tengo conocimiento.</p>
                </div>
                <div className={styles.cajaHab}>
                    <CajaHabilidades color="#E34F26">HTML <i className="fa-brands fa-html5"></i></CajaHabilidades>
                    <CajaHabilidades color="#1572B6">CSS <i className="fa-brands fa-css3-alt"></i></CajaHabilidades>
                    <CajaHabilidades color="#F7DF1E">JavaScript <i className="fa-brands fa-js"></i></CajaHabilidades>
                    <CajaHabilidades color="#61DAFB">React <i className="fa-brands fa-react"></i></CajaHabilidades>
                    <CajaHabilidades color="#DD0031">Angular <i className="fa-brands fa-angular"></i></CajaHabilidades>
                </div>
            </div>
        </section>
    )
}


export default Habilidades