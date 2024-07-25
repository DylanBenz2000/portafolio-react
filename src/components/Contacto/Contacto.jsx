import styles from './Contacto.module.css'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import github from './github.png'
import twitter from './twitter.png'
import Boton from '../Boton/Boton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contacto = () => {
    const navigate = useNavigate();
    const [formStatus, setFormStatus] = useState('');

    const manejarEnvio = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('SUCCESS');
                form.reset();
                navigate('/mensaje-enviado');
            } else {
                setFormStatus('ERROR');
            }
        } catch (error) {
            setFormStatus('ERROR');
        }
    };
    return(
        <section className={styles.containerForm} id='contacto'>

        <div className={styles.containerTitles}>
            <h1>Conectemos</h1>
            <p>Dí hola a <span> <a href="mailto:dylanbenz2000@gmail.com">dylanbenz2000@gmail.com</a></span></p>
            <div className={styles.redes}>
                <a href="https://www.linkedin.com/in/michael-dylan-ramos-ben%C3%ADtez/" target='_blank'><img src={linkedin} alt="" /></a>
                <a href="https://github.com/DylanBenz2000"><img src={github} alt="" /></a>
                <a href="https://x.com/DylanBenz2000" target='_blank'><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/lmaximvs/" target='_blank'><img src={instagram} alt="" /></a>
            </div>
        </div>

            <form action="https://formspree.io/f/xrbzevge" method="POST" onSubmit={manejarEnvio}>

                <label htmlFor="">Name</label>
                <input type="text" name='Name' />
                
                <label htmlFor="">Email</label>
                <input type="email" name="Email" id="" />

                <label htmlFor="">Asunto</label>
                <input type="text" name='Asunto' />

                <label htmlFor="">Mensaje</label>
                <textarea name="Mensaje" id=""></textarea>

                <Boton type="submit">Enviar</Boton>

            </form>
            {formStatus === 'ERROR' && <p className={styles.errorMessage}>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>}

        </section>
    )
}

export default Contacto