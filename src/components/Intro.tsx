import React from 'react'
import '../styles/intro.scss'

const Intro: React.FC = () => {
    const scrollBottom = () => {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth'
        })
    }

    return (
        <div className='intro shadow'>
            <div className='intro__info'>
                <h1>Hi! I'm Jack,</h1>
                <h1>a.k.a Scr00b1e</h1>
                <p>Junior Front-end developer</p>
                <button className='btn' onClick={scrollBottom}>Text me</button>
            </div>
            <div>
                <img src="./v2.png" alt="" className='intro__img' />
            </div>
        </div>
    )
}

export default Intro