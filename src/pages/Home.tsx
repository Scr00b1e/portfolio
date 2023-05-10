import React from 'react'
import Intro from "../components/Intro"
import LangsItem from "../components/LangsItem"
import { languages } from "../data/languages"
import { projects } from '../data/projects'
import ProjItem from '../components/ProjItem'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <>
            <Intro />

            <section className='words shadow'>
                <div>
                    <h1>Sup, how ya doin</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, iste magnam animi vitae vero minus deserunt aperiam repellendus, ipsum id modi doloribus voluptatem ratione assumenda, earum asperiores tenetur fugiat esse.</p>
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

            <section className="view shadow">
                <h1 className='txtCenter'>Text me</h1>
                <form className="flex flex__column">
                    <input type="text" placeholder="Email" className='input' />
                    <textarea name="" placeholder="Message" className='input'></textarea>
                    <button className='btn'>Send</button>
                </form>
            </section>

        </>
    )
}

export default Home