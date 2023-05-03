import React from 'react'
import '../styles/langsItem.scss'

type LangsItemProps = {
    img: string
    title: string
}

const LangsItem: React.FC<LangsItemProps> = ({ img, title }) => {
    return (
        <div className='item'>
            <img src={img} alt="" className='item__img' />
            <p>{title}</p>
        </div>
    )
}

export default LangsItem