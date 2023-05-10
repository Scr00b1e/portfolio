import React from 'react'
import '../styles/intro.scss'

const Intro: React.FC = () => {
    return (
        <div className='intro shadow'>
            <div className='intro__info'>
                <h1>Hi! I'm Jack,</h1>
                <h1>a.k.a Scr00b1e</h1>
                {/* <p>Junior Front-end developer</p> */}
                <button className='btn'>Some Button</button>
            </div>
            <div>
                <img src="./v2.png" alt="" className='intro__img' />
            </div>
        </div>
    )
}

export default Intro