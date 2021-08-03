import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Home() {
	return (
		<div className="main">
			<div>
				<p>hi its <h1>Vinay Kumar P</h1></p>

				<h2>view my assignment from below button</h2>

			</div>
			<Link to="/resources">
			<button className="mybtn" >Resources</button>
			</Link>
			<Link to="/profile">
			<button className="mybtn" >Vinay's Profile</button>
			</Link>
			

		</div>
	)
}