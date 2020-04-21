import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/css/Results.css";
import M from "materialize-css";

const Results = (props) => {
	let results = props.results;
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<div className='results-cards-container'>
			{results.map((result) => (
				<div className='card small individual-cards teal lighten-4'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img
							className='activator'
							src='https://via.placeholder.com/150'
							alt='default'
						/>
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>
							{result.name}
							<i className='material-icons right'>more_vert</i>
						</span>
						<p>
							<a href={`${result.website}`}>Website</a>
						</p>
					</div>
					<div className='card-reveal teal'>
						<span className='card-title black-text text-darken-4'>
							{result.name}
							<i className='material-icons right'>close</i>
						</span>
						<p className='black-text'>
							City: {result.city}
							<br />
							State: {result.state}
							<br />
							Upload: {result.uploadSpeed} Mbps
							<br />
							Download: {result.downloadSpeed} Mbps
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Results;
