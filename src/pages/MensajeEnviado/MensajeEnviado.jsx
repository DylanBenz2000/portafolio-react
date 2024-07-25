import styles from './MensajeEnviado.module.css'
import Boton from '../../components/Boton/Boton'
import { useNavigate } from 'react-router-dom'
import vader from './darth-vader.png'

const MensajeEnviado = () => {
    const navigate = useNavigate()
    const irAlInicio = () => {
        navigate('/')
    }
    return(
        <section className={styles.mensaje}>
            <h1>Mensaje enviado con éxito!</h1>
            <p>Gracias por contactarme. Me pondre en contacto contigo pronto.</p>
            <img src={vader} alt="" />
            <Boton onClick={irAlInicio}>Volver al inicio</Boton>
        </section>
    )

}

export default MensajeEnviado