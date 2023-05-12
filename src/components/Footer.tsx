import React from 'react'
import '../styles/footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='footer txtCenter'>
            <div>
                <h3 className='footer__text'>Personal portfolio made by @scr00b1e</h3>
            </div>
            <div>
                <div className='flex'>
                    <a href="https://github.com/Scr00b1e/news-app" target='_blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt=""
                            className='footer__img' />
                    </a>
                    <a href="https://twitter.com/scr00b1e" target='_blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669691.png" alt=""
                            className='footer__img' />
                    </a>
                    <a href="https://t.me/scr00b1e" target='_blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968940.png" alt="" className='footer__img' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer