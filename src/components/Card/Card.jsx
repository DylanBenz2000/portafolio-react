import styles from './Card.module.css'
import arrow from './arrow.png'
import git from './github.png'

const Card = ({ titulo, descripcion, year, role, imagen, demo, github}) => {
    return (
    <>

    <section className={styles.containerCard}>

        <div className={styles.cuadro}>
                <img src={imagen} alt="" />
        </div>

            <div className={styles.about}>
                <h2>{titulo}</h2>
                <h3 className={styles.projectAbout}>{descripcion}</h3>
                <p>PROJECT INFO</p>
                <p>Year <span>{year}</span></p>
                <p>Role <span>{role}</span></p>

                <div className={styles.containerAnchors}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.anchorDemo}>Live Demo <img src={arrow} alt="" /></a>
                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.anchorGit}>Ver Github <img src={git} alt="" /></a>
            </div>
    
        </div>

    </section>


</>

    )
}

export default Card