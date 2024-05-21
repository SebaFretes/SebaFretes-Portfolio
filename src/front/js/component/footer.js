import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p style={{ fontSize: '1.4rem', fontWeight: '700', backgroundColor: '#F9F9F9' }}>
			MADE WITH <i className="fa fa-heart text-danger" /> BY{" "}
			<Link to={'https://github.com/SebaFretes/'} target="_blank">SEBASTIAN FRETES</Link>
		</p>
	</footer>
);
