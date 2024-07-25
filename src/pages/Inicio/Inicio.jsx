import AboutMe from "../../components/AboutMe/AboutMe"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Presentacion from "../../components/Presentacion/Presentacion"
import Projects from "../../components/Projects/Projects"
import styles from './Inicio.module.css'
import Contacto from "../../components/Contacto/Contacto"

const Inicio = () => {
    return (
        <>
        <div className={styles.container}>
            {/* <Header /> */}
            <Presentacion />
            <Projects />
            <AboutMe />
            <Contacto />
            {/* <Footer /> */}
        </div>

        </>

    )
}

export default Inicio