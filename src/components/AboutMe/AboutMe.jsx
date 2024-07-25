import styles from './AboutMe.module.css'
import Boton from '../Boton/Boton'
import Habilidades from '../Habilidades/Habilidades'
import { useState } from 'react'

const AboutMe = () => {

    const [mostrarMasSobreMi, setMostrarMasSobreMi] = useState(false)

    const cambiarMostrar = () => {
        setMostrarMasSobreMi(!mostrarMasSobreMi)
    }

    return(

        <>
        <section className={styles.containerAbout} id='acercade'>
            <h1>ABOUT ME</h1>
            <div>
                <h2>Ingeniero en Sistemas Computacionales recién titulado buscando oportunidad para adquirir más experiencia en el desarrollo web.</h2>
                <p> Poseo habilidades sólidas en la creación de aplicaciones y sitios web. Mi enfoque técnico se complementa con fuertes soft skills, destacando mi capacidad de trabajo en equipo para colaborar efectivamente en proyectos multidisciplinarios. 
                    Mi habilidad de comunicación clara y concisa facilita la comprensión de conceptos técnicos, optimizando la ejecución de tareas. Guiado por la honestidad, mantengo una ética de trabajo transparente que contribuye a un ambiente de confianza y respeto. Busco oportunidades para aplicar esta combinación de habilidades técnicas y blandas en un entorno laboral dinámico y desafiante.
                    Tengo amplios conocimientos en GIT, Angular, JavaScript, HTML 5, Bootstrap, Java.</p>
                <Boton onClick={cambiarMostrar}>Más sobre <br /> mi</Boton>
            </div>
        </section>

        {mostrarMasSobreMi && <Habilidades />}


        </>

    )
}

export default AboutMe