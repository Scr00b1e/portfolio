import React from 'react'
import emailjs from '@emailjs/browser'

const TextMe: React.FC = () => {
    const form = React.useRef<HTMLFormElement>(null)

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_uc96q1y',
            'template_4kwkd9q',
            form.current || 'null',
            'hgNI-SxhvUqm1sRW7')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="view shadow">
            <h1 className='txtCenter'>Text me</h1>
            <form className="flex flex__column" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" className='input' name="user_name" />
                <input type="text" placeholder="Email" className='input' name="user_email" />
                <textarea name="message" placeholder="Message" className='input input__area'></textarea>
                {/* <button className='btn'>Send</button> */}
                <input type="submit" className='btn' value={'Send'} />
            </form>
        </section>
    )
}

export default TextMe