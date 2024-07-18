import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Presentacion from "../../components/Presentacion/Presentacion"
import Projects from "../../components/Projects/Projects"
import styles from './Inicio.module.css'

const Inicio = () => {
    return (
        <>
        <div className={styles.container}>
            <Header />
            <Presentacion />
            <Projects />
            <Footer />
        </div>

        </>

    )
}

export default Inicio