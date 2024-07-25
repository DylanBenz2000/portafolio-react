import styles from './Projects.module.css'
import Card from '../Card/Card'
import { useState, useEffect } from 'react'

const Projects = () => {

    const [proyectos, setProyectos] = useState([])

    useEffect( () => {
        fetch("http://localhost:3000/proyectos")
        .then(response => response.json())
        .then(data =>{
            setProyectos(data)
        })
    }, [])

    return(

        <>

            <div className={styles.title} id='proyectos'>
                <h1>Proyectos Destacados</h1>
                <p>Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo front-end.</p>
            </div>

            <section className={styles.container}>
                {
                    proyectos.map( (proyecto) => {
                        return <Card  key={proyecto.nombre} {...proyecto}/>
                    })
                }
            </section>
        
        </>

        
        


    )
}

export default Projects