import React from 'react'
import ProjItem from '../components/ProjItem'
import { Link } from 'react-router-dom'
import '../styles/projects.scss'
import { projectFull } from '../data/projectsFull'

const Projects: React.FC = () => {
    return (
        <section className="full txtCenter">
            <h1>Projects</h1>
            <div className="flex flex__wrap">
                {
                    projectFull.map((obj, i) => (
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