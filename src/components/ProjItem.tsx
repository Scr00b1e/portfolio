import React from 'react'
import '../styles/projItem.scss'

type ProjProps = {
    name: string
    body: string
    link: string
    lang: string
    img: string
}

const ProjItem: React.FC<ProjProps> = ({ name, body, link, lang, img }) => {
    return (
        <div className='flex flex__column card shadow'>
            <span className='card__span'>{lang}</span>
            <img src={img} alt="" className='card__img' />
            <h1>{name}</h1>
            <p>{body}</p>
            <a href={link} target='_blank'>
                <button className='btn'>Visit</button>
            </a>
        </div>
    )
}

export default ProjItem