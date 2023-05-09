import React from 'react'
import '../styles/sidebar.scss'

const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar'>
            <div className='flex flex__between sidebar__top'>
                <div className='flex flex__column'>
                    <a href="https://github.com/Scr00b1e/news-app" target='_blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt=""
                            className='sidebar__img' />
                    </a>
                    <a href="https://twitter.com/scr00b1e" target='_blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669691.png" alt=""
                            className='sidebar__img' />
                    </a>
                    <a href="https://t.me/scr00b1e">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968940.png" alt="" className='sidebar__img' />
                    </a>
                </div>
                <div className='rotate'>
                    @scr00b1e
                </div>
            </div>
        </aside>
    )
}

export default Sidebar