import styles from './Projects.module.css'
import work from './work.png'

const Projects = () => {
    return(

        // TODO ESTO LO HARE DINAMICO DESPUÉS, LO PASARE EN UN JSON o una BD para que después lo itere en un map y pinte la info

        <>       

                <div className={styles.titlesProjects}>
                    <h1>Proyectos Destacados</h1>
                    <p>Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo front-end.</p>
                </div>

            <section className={styles.containerProjects}>
                
                <div className={styles.projects}>
                    {/* Aca ira una etiqueta después la pondre que diga que tipo de trabajo es
                    si es un challenge o proyecto propio, etc.
                    */}
                    <img src={work} alt="" />

                </div>

                <div className={styles.about}>
                    <h2>Promotional landing page for our favorite show</h2>
                    <h3 className={styles.projectAbout}>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</h3>
                    <p>PROJECT INFO</p>
                    <p>Year <span>2023</span></p>
                    <p>Role <span>Front-End Developer</span></p>
                    <a href="">Live Demo</a>
                    <a href="">Ver Github</a>
                </div>


            </section>
        </>


    )
}

export default Projects