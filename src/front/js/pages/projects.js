import React from 'react';
import { Link } from "react-router-dom";
import Travelo from '../../img/Travelo.jpg';
import FirstProyect from '../../img/img1.png';
import BlogDeCafe from '../../img/img3.png';
import Festival from '../../img/img4.png';

export const Projects = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>PROJECTS</h1>

                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <a href='https://sample-service-name-pv43.onrender.com/' target="_blank">
                                <img src={Travelo} className="img-fluid rounded-start" alt="..." />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Travelo</h5>
                                <p className="card-text">Travelo is a web application developed for a travel agency. It allows users to register, explore, and book hotels, tours, and vacation packages. Designed to facilitate travel planning, Travelo offers an intuitive and comprehensive experience for all travelers.</p>
                                <p className="card-text"><small className="text-muted">HTML, CSS, Javascript, Python, Flask, SqlAlchemy</small></p>
                                <a href='https://sample-service-name-pv43.onrender.com/' target="_blank">View Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">My First Web</h5>
                                <p className="card-text">This was my first test web page, where I put my HTML and CSS knowledge into practice.</p>
                                <p className="card-text"><small className="text-muted">HTML, CSS</small></p>
                                <a href='https://primerproyectowebsebafretes.netlify.app/' target="_blank">View Demo</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <a href='https://primerproyectowebsebafretes.netlify.app/' target="_blank">
                                <img src={FirstProyect} className="img-fluid rounded-start" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <a href='https://distracted-hodgkin-7bbbe7.netlify.app/' target="_blank">
                                <img src={BlogDeCafe} className="img-fluid rounded-start" alt="..." />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blog de Café</h5>
                                <p className="card-text">This was my first test web page, where I put my HTML and CSS knowledge into practice.</p>
                                <p className="card-text"><small className="text-muted">HTML, CSS</small></p>
                                <a href='https://distracted-hodgkin-7bbbe7.netlify.app/' target="_blank">View Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Asunción Rock & Pop Festival</h5>
                                <p className="card-text">This was my first test web page, where I put my HTML and CSS knowledge into practice.</p>
                                <p className="card-text"><small className="text-muted">HTML, CSS</small></p>
                                <a href='https://sebafretesasuncionrockpopfestival.netlify.app/' target="_blank">View Demo</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <a href='https://sebafretesasuncionrockpopfestival.netlify.app/' target="_blank">
                                <img src={Festival} className="img-fluid rounded-start" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}