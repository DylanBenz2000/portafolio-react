import styles from './Presentacion.module.css'
import git from './github.png'
import linkedin from './linkedin.png'
import yo from './yoo.png'

const Presentacion = () => {
    return(
        <section className={styles.container}>

            <div className={styles.presentacion}>
                <h1>Hola, soy Dylan Ramos.</h1>
                <p>Un desarrollador front-end con sede en Morelos apasionado por crear sitios web accesibles y fáciles de usar</p>
                <div>
                    <a href="https://github.com/DylanBenz2000" target='blank' rel='noopener noreferrer'>
                        <img src={git} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-dylan-ramos-ben%C3%ADtez/" target='blank' rel='noopener noreferrer'>
                        <img src={linkedin} alt="" />
                    </a>
                </div>
            </div>

            <div className={styles.rectangulo}>
                    <img src={yo} alt="" />
            </div>

        </section>
    )
}

export default Presentacion