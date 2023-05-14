import React from 'react'
import Intro from "../components/Intro"
import LangsItem from "../components/LangsItem"
import { languages } from "../data/languages"
import { projects } from '../data/projects'
import ProjItem from '../components/ProjItem'
import { Link } from 'react-router-dom'
import TextMe from '../components/TextMe'

const Home: React.FC = () => {
    return (
        <>
            <Intro />

            <section className='words shadow'>
                <div>
                    <h1>Young adventure seeker</h1>
                    <p>I'm just enjoy to work with frontend. So i'm good in React, Vue and Next.js. I also know how to work with tailwindcss. I always trynna increase my knowledge and would love to work with new technologies, stacks etc.</p>
                </div>
            </section>

            <section>
                <div className="view shadow">
                    <h1>Languages</h1>
                    <div className="flex">
                        {
                            languages.map((obj, i) => (
                                <LangsItem {...obj} key={i} />
                            ))
                        }
                    </div>
                </div>
                <div className="view flex shadow">
                    <div className='info-item'>
                        <h1>1+</h1>
                        <p>experience</p>
                    </div>
                    <div className='info-item'>
                        <h1>10+</h1>
                        <p>projects</p>
                    </div>
                </div>
            </section>

            <section className="projects txtCenter">
                <h1>Projects</h1>
                <div className="flex flex__wrap">
                    {
                        projects.map((obj, i) => (
                            <ProjItem {...obj} key={i} />
                        ))
                    }
                </div>
                <Link to={'/projects'}>
                    <button className='btn'>See more</button>
                </Link>
            </section>

            <TextMe />

        </>
    )
}

export default Home