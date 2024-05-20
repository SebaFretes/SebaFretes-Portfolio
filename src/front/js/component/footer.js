import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<Link to={'https://github.com/SebaFretes/'} target="_blank">Sebastián Fretes</Link>
		</p>
	</footer>
);
