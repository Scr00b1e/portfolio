import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='header flex flex__between'>
            <div>
                <Link to={'/'}>
                    <h1 className='header__title'>Scr00b1e</h1>
                </Link>
            </div>
            <div className='flex flex__between'>
                <Link to={'/blog'}>
                    <h1 className='header__title'>Blog</h1>
                </Link>
                <Link to={'/projects'}>
                    <h1 className='header__title'>Projects</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header