import React from 'react'
import { projects } from '../data/projects'
import ProjItem from '../components/ProjItem'
import { Link } from 'react-router-dom'
import '../styles/projects.scss'

const Projects: React.FC = () => {
    return (
        <section className="full txtCenter">
            <h1>Projects</h1>
            <div className="flex flex__wrap">
                {
                    projects.map((obj, i) => (
                        <ProjItem {...obj} key={i} />
                    ))
                }
            </div>
            <Link to={'/'}>
                <button className='btn'>Back</button>
            </Link>
        </section>
    )
}

export default Projects