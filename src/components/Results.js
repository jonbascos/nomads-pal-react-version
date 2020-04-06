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
				<div className='card small individual-cards'>
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
							<a href='#'>This is a link</a>
						</p>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							{result.name}
							<i className='material-icons right'>close</i>
						</span>
						<p>
							Here is some more information about this product
							that is only revealed once clicked on.
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Results;
