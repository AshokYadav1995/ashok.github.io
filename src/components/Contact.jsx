import React, { useState } from 'react'
import './Contact.css'

export const Contact = () => {
    const [name, setname] = useState('');
    const [org_type, setorg_type] = useState('');
    const [org_name, setorg_name] = useState('');
    const [email, setemail] = useState('');
    const [msg, setmsg] = useState('');
    const onContact = () => {
        console.log(name, org_type, org_name, email, msg);
    }
    return (

        <div className='centerform'>

            <div className='contact-form'>
                <div className='heading'>
                    <h1>Contact Form</h1>
                </div>
                <label htmlFor=''>Name</label>
                <input id="name" className='input' name="name" type="text" value={name} onChange={e => setname(e.target.value)} />
                <label htmlFor=''>Ocuupation type</label>
                <input id="org_type" className='input' name="org_type" type="text" value={org_type} onChange={e => setorg_type(e.target.value)} />
                <label htmlFor=''>Organization/instiute name</label>
                <input id="org_name" className='input' name="org_name" type="text" value={org_name} onChange={e => setorg_name(e.target.value)} />
                <label htmlFor=''>Email</label>
                <input id="email" className='input' name="email" type="text" value={email} onChange={e => setemail(e.target.value)} />
                <label htmlFor=''>Message</label>
                <textarea name='msg' id='msg' col='30' rows="10" value={msg} onChange={(e) => setmsg(e.target.value)}></textarea>
                <div className='savebtn'>
                    <button type="submit" onClick={onContact} className='button'>Send</button>
                </div>
            </div>

        </div>
    )
}
export default Contact
