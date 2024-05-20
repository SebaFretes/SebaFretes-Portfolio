import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Video from "../../img/video.mp4";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="video">
				<div className="overlay">
					<div className="container">
						<h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#181818 ' }}>SEBASTIAN FRETES</h1>
						<hr style={{ width: '60%', height: '1px', border: '0', margin: '0 auto' }} />
						<p style={{ fontWeight: 'bold', fontSize: '1.8rem', textAlign: 'center', color: '#181818 ' }}>WEB DEVELOPER</p>
					</div>
					<video autoPlay muted loop>
						<source src={Video} type="video/mp4" />
					</video>
				</div>
			</div>
			<div className="text-center">
				<p>Hi! My name is Sebastian Fretes. I'm a full-stack software developer based in Asunción, Paraguay. I like developing cool and useful software by leveraging modern technologies!
					Feel free to view some of my projects and their code. You can also take a look at my Resume or reach out to me via email.</p>
			</div>
		</>
	);
};
