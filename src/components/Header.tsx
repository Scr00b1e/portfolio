import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='header flex flex__between'>
            <div>
                <Link to={'/'}>
                    Scr00b1e
                </Link>
            </div>
            <div>
                <Link to={'/projects'}>
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default Header