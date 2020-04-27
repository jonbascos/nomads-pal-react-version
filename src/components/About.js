import React from "react";
import "../static/css/About.css";

function About(props) {
	return (
		<div className='about-container'>
			<div className='about-content'>
				<p>
					Nomad's Pal is a crowd-sourced database of locations where
					remote workers and digital nomads alike can locate a place
					to work. It also allows anyone to contribute to the
					database.
				</p>
				<p>
					I envisioned myself to one day be able to work remotely and
					combine the two things that I would like to do: Develope
					websites/software and travel to places that people only talk
					about visiting. That's when I came up with the idea of
					creating a directory of locations where other like minded
					people could help each other.
				</p>
				<p>
					<h4>Future features:</h4>
					<ol>
						<li>
							Ability to create an account and save your favorite
							places.
						</li>
						<li>Ability to leave comments about the locations.</li>
						<li>
							Ability to view the average internet speeds you can
							expect at the location.
						</li>
						<li>
							Ability to enter the speeds you got at an existing
							location.
						</li>
						<li>List of amenities at the location</li>
					</ol>
					<p>
						If you'd like to request a feature or if you have any
						suggestions, you can forward them to{" "}
						<a href='mailto:suggestions@nomadspal.com'>
							suggestions@nomadspal.com
						</a>
					</p>
				</p>
				<p></p>
			</div>
		</div>
	);
}

export default About;
