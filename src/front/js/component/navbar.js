import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<button className="btn" style={{ fontSize: '1.4rem', fontWeight: '700', backgroundColor: '#F9F9F9' }}>SEBASTIAN FRETES</button>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav ms-auto">
						<Link to="/info" className="nav-item">
							<button className="btn-grey">ABOUT</button>
						</Link>
						<Link to="/projects" className="nav-item">
							<button className="btn-grey">PROJECTS</button>
						</Link>
						<Link to="/certifications" className="nav-item">
							<button className="btn-grey">CERTIFICATIONS</button>
						</Link>
						<Link to="/contact" className="nav-item">
							<button className="btn-grey">CONTACT</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};


