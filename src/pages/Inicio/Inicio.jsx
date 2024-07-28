import AboutMe from "../../components/AboutMe/AboutMe"

import Presentacion from "../../components/Presentacion/Presentacion"
import Projects from "../../components/Projects/Projects"
import styles from './Inicio.module.css'
import Contacto from "../../components/Contacto/Contacto"

const Inicio = () => {
    return (
        <>

            {/* <Header /> */}
            <Presentacion />
            <Projects />
            <AboutMe />
            <Contacto />
            {/* <Footer /> */}


        </>

    )
}

export default Inicio