import React from 'react';
import { Link } from "react-router-dom";
import Certificate from '../../../../public/4geeks.pdf';

export const Certifications = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>CERTIFICATIONS</h1>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center'>
                        <ion-icon name="school" style={{ fontSize: '1.8rem', marginRight: '10px' }}></ion-icon>
                        <h2>Full-Stack Software Development Certification</h2>
                    </div>

                    <Link to={Certificate}>
                        <button className='btn-grey' style={{ width: '13rem', marginLeft: '2.5rem' }}>SHOW CREDENTIAL</button>
                    </Link>

                </div>
            </div>


        </>
    )
}