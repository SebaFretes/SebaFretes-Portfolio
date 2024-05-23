import React, { useState } from 'react';
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const emailFetch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(process.env.BACKEND_URL + "/sendemail", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })

            if (response.ok) {
                alert('Message sent successfully');
                setName('');
                setEmail('');
                setMessage('');
            }
            else {
                throw new Error('Error sending the message');
            }
        }
        catch (error) {
            console.log(error);
            alert('Error sending the message');
        }
    }

    return (
        <div className="container">
            <div style={{ width: '100%' }}> </div>

            <form onSubmit={emailFetch} style={{ margin: '1rem auto', backgroundColor: '#334154', width: '70%', padding: '2rem', justifyContent: 'center', alignItems: 'center', maxWidth: '50rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box', color: '#000' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#000' }}>CONTACT</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="name" style={{ fontWeight: '600' }}>NAME</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ fontWeight: '600' }}>EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message" style={{ fontWeight: '600' }}>MESSAGE</label>
                    <textarea
                        rows="6"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    ></textarea>
                </div>
                <button type="submit" className='btn-grey'>SEND</button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <a href='https://www.linkedin.com/in/jsebastianfretes/' target="_blank" className="icon-link"><SiLinkedin /></a>
                <a href='https://github.com/SebaFretes/' target="_blank" className="icon-link"><SiGithub /></a>
                <a href='https://www.instagram.com/sebafretes_/' target="_blank" className="icon-link"><SiInstagram /></a>
            </div>

        </div>
    )
}