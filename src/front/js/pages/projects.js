import React from 'react';
import { Link } from "react-router-dom";
import Travelo from '../../img/rigo-baby.jpg'

export const Projects = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>PROJECTS</h1>

                <div className='d-flex'>
                    <div className="card me-3" style={{ width: '18rem' }}>
                        <img src={Travelo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Travelo</h5>
                            <h4>Stack</h4>
                            <p>Travelo is a web application developed for a travel agency. It allows users to register, explore, and book hotels, tours, and vacation packages. Designed to facilitate travel planning, Travelo offers an intuitive and comprehensive experience for all travelers.</p>
                            <p className="card-text">HTML, CSS, Javascript, Python, Flask, SqlAlchemy</p>
                            <a href='https://sample-service-name-pv43.onrender.com/' target="_blank">View Demo</a>
                        </div>
                    </div>


                    <div className="card me-3" style={{ width: '18rem' }}>
                        <img src={Travelo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Travelo</h5>
                            <h4>Stack</h4>
                            <p className="card-text">HTML, CSS, Javascript, Python, Flask, SqlAlchemy</p>
                            <a href='https://sample-service-name-pv43.onrender.com/' target="_blank">View Demo</a>
                        </div>
                    </div>

                </div>













                {/* <div className='d-flex'>

                    <h4>Hello</h4>
                    <a href='https://primerproyectowebsebafretes.netlify.app/' target="_blank">Open Demo</a>

                </div>

                <ul>
                    <a href='https://frontendstoresebafretes.netlify.app/' target="_blank">FrontEnd store</a>
                </ul>
                <ul>
                    <a href='https://distracted-hodgkin-7bbbe7.netlify.app/' target="_blank">Blog de Café</a>
                </ul>
                <ul>
                    <a href='https://sebafretesasuncionrockpopfestival.netlify.app/' target="_blank">Asunción Rock & Pop Festival</a>
                </ul>
                <ul>
                    <a href='https://sample-service-name-pv43.onrender.com/' target="_blank">Travelo</a>
                </ul> */}
            </div>
        </>
    )
}