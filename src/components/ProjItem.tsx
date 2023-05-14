import React from 'react'
import '../styles/projItem.scss'

type ProjProps = {
    name: string
    body: string
    link?: any
    lang: string
    img: string
    repo: string
}

const ProjItem: React.FC<ProjProps> = ({ name, body, link, lang, img, repo }) => {
    return (
        <div className='flex flex__column card shadow'>
            <span className='card__span'>{lang}</span>
            <img src={img} alt="" className='card__img' />
            <h1>{name}</h1>
            <p>{body}</p>
            <div className='card__btn'>
                {
                    link &&
                    <a href={link} target='_blank'>
                        <button className='btn'>Visit</button>
                    </a>
                }
                {
                    repo &&
                    <a href={repo} target='_blank'>
                        <button className='btn'>Repository</button>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjItem