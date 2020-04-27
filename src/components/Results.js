import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/css/Results.css";
import M from "materialize-css";
import nightlife from "../static/images/nightlife.jpg";

const Results = (props) => {
	let results = props.results;
	console.log("From Results: ", results);
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<div className='results-cards-container'>
			{results.length === 0 ? (
				<div>
					<h1>Your search had no results</h1>
					<center>
						<Link to='/'>
							<button
								className='btn waves-effect waves-light'
								type='submit'
								name='action'
							>
								Go Home
								<i className='material-icons right'></i>
							</button>
						</Link>
					</center>
				</div>
			) : (
				<div>
					Results: {results.length}
					{results.map((result) => (
						<div className='card small individual-cards black'>
							<div className='card-image waves-effect waves-block waves-light'>
								<img
									className='activator'
									src={
										result.imageUrl
											? `${result.imageUrl}`
											: `${nightlife}`
									}
									alt='default'
								/>
							</div>
							<div className='card-content'>
								<span className='card-title activator white-text text-darken-4'>
									{result.name}
									<i className='material-icons right'>
										more_vert
									</i>
								</span>
								<p>
									{result.website ? (
										<a
											href={`${result.website}`}
											target='_blank'
											rel='noopener noreferrer'
										>
											Website
										</a>
									) : null}
								</p>
							</div>
							<div className='card-reveal black'>
								<span className='card-title white-text text-darken-4'>
									{result.name}
									<i className='material-icons right'>
										close
									</i>
								</span>
								<p className='white-text'>
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
			)}
		</div>
	);
};

export default Results;
