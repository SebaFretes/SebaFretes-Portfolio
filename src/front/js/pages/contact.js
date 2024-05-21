import React from 'react';

export const Contact = () => {
    return (
        <div className="container">


            <div style={{ width: '100%' }}> </div>

            {/* backgroundColor: '#252525' */}
            <form style={{ margin: '1rem auto', backgroundColor: '#252525', width: '90%', padding: '2rem', justifyContent: 'center', alignItems: 'center', maxWidth: '50rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box', color: '#000' }}>

                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#000' }}>CONTACT</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="nombre">NAME</label>
                    <input
                        type="text"
                        name="nombre"
                        // value={nombre}
                        // onChange={handleNameChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        // value={email}
                        // onChange={handleEmailChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="mensaje">MESSAGE</label>
                    <textarea
                        rows="6"
                        name="mensaje"
                        // value={mensaje}
                        // onChange={handleMensajeChange}
                        style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                    ></textarea>
                </div>
                <button type="submit" className='btn-grey'>SEND</button>
            </form>
        </div>
    )
}