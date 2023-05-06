import React from 'react'
import '../styles/sidebar.scss'

const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar'>
            <div className='flex flex__between'>
                <div>
                    <p>hey</p>
                    <p>woow</p>
                </div>
                <div>
                    some
                </div>
            </div>
        </aside>
    )
}

export default Sidebar