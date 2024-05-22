import React from 'react';
import { Link } from "react-router-dom";
import pdf from '../../img/4geeksCertificate.pdf'
import idt from '../../img/certificadoIDT.pdf'

export const Certifications = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>CERTIFICATIONS</h1>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center' style={{ marginTop: '2rem' }}>
                        <ion-icon name="school" style={{ fontSize: '1.8rem', marginRight: '10px' }}></ion-icon>
                        <h2>Full-Stack Software Development Certification</h2>
                    </div>

                    <Link to={pdf} target="_blank" style={{ width: '13rem', marginLeft: '2.5rem', textDecoration: 'none' }}>
                        SHOW CREDENTIAL
                    </Link>

                    <div className='d-flex align-items-center' style={{ marginTop: '2rem' }}>
                        <ion-icon name="school" style={{ fontSize: '1.8rem', marginRight: '10px' }}></ion-icon>
                        <h2>Introduction to Programming</h2>
                    </div>

                    <Link to={idt} target="_blank" style={{ width: '13rem', marginLeft: '2.5rem', textDecoration: 'none' }}>
                        SHOW CREDENTIAL
                    </Link>

                </div>
            </div>


        </>
    )
}