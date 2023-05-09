import React from 'react'
import '../styles/projItem.scss'

type ProjProps = {
    name: string
    body: string
    link: string
}

const ProjItem: React.FC<ProjProps> = ({ name, body, link }) => {
    return (
        <div className='flex flex__column card shadow'>
            <h1>{name}</h1>
            <p>{body}</p>
            <a href={link} target='_blank'>
                <button className='btn'>Visit</button>
            </a>
        </div>
    )
}

export default ProjItem