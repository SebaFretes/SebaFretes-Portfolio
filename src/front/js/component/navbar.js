import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn" style={{ fontSize: '1.4rem', fontWeight: '700', backgroundColor: '#F9F9F9' }}>SEBASTIAN FRETES</button>
				</Link>
				<div className="ml-auto ">
					<Link to="/info">
						<button className="btn-grey">ABOUT</button>
					</Link>
					<Link to="/projects">
						<button className="btn-grey">PROJECTS</button>
					</Link>
					<Link to="/certifications">
						<button className="btn-grey">CERTIFICATIONS</button>
					</Link>
					<Link to="/contact">
						<button className="btn-grey">CONTACT</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
