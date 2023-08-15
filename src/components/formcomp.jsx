import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Formcomp = () => {
    const formref = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceid = 'service_dwgd8ij'
        const TEMPLATE_ID = 'template_zrw76bn'

        emailjs.sendForm(serviceid, TEMPLATE_ID, formref.current, 'lhq7kGdpjQSZIbsyJ')
            .then((result) => {
                console.log(result.text);
                console.log('form submited')
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <h1> Contact Form</h1>
            <form ref={formref} style={{ display: 'flex', flexDirection: 'column' }} onSubmit={sendEmail}>
                <input type="text" placeholder='name' style={{ margin: "4px 0px", borderRadius: '15px', padding: '8px 30px' }} name='user_name' />
                <input type="text" placeholder='email' style={{ margin: "4px 0px", borderRadius: '15px', padding: '8px 30px' }} name='user_email' />
                <textarea type="text" placeholder='enter message' rows="6" cols="50" style={{ margin: "4px 0px", borderRadius: '8px', padding: '8px 30px' }} name='message' />
                <input type='submit' style={{ backgroundColor: "plum", alignSelf:'center',padding: '8px 30px',borderRadius: '8px'}} value={'LetTalk'} />
            </form>

        </div>
    )
}

export default Formcomp