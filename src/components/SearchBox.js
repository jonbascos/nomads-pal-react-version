import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../static/css/SearchBox.css";
import M from "materialize-css";

import Results from "./Results";
import { db } from "./services/firebase";

function Search(props) {
	const history = useHistory();

	// Retrieves all locations from firestore
	useEffect(() => {
		console.log("db Mounted");
		db.collection("locations")
			.get()
			.then((snapshot) => {
				const allLocations = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					allLocations.push(data);
					console.log("Data: ", data);
				});
				props.setLocations(allLocations);
			});
	}, []);

	// Auto Initialize all of Materialize CSS
	useEffect(() => {
		M.AutoInit();
	}, []);

	// Updates state of the input fields
	const handleChange = (e) => {
		const { name, value } = e.target;
		props.setSearch((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	// Searches for matches
	const handleSubmit = (e) => {
		e.preventDefault();
		let city = props.search.city.toLowerCase();
		let state = props.search.state.toLowerCase();

		db.collection("locations")
			.where("city", "==", `${city}`)
			.where("state", "==", `${state}`)
			.get()
			.then((querySnapshot) => {
				const queryResult = [];
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					queryResult.push(data);
				});
				props.setResults(queryResult);
			})
			.then(history.push("/results"));
	};

	console.log("Locations: ", props.locations);
	console.log("Search: ", props.search);
	console.log("Results from SearchBox: ", props.results);

	return (
		<div>
			<div className='searchbox-container'>
				<span className='searchbox-heading'>Where to work today?</span>
				<span className='searchbox-headline'>
					Crowd-sourced locations for the remote worker
				</span>
				<div className='row'>
					<form className='col s12' onSubmit={handleSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								{/* <label>City</label> */}
								<input
									type='text'
									name='city'
									placeholder='Enter city'
									onChange={handleChange}
								></input>
							</div>
							<div className='input-field col s12'>
								<select name='state' onChange={handleChange}>
									<option value='' disabled selected>
										---Select State---
									</option>
									<option value='Alabama' disabled>
										Alabama
									</option>
									<option value='Alaska' disabled>
										Alaska
									</option>
									<option value='Arizona' disabled>
										Arizona
									</option>
									<option value='Arkansas' disabled>
										Arkansas
									</option>
									<option value='California' disabled>
										California
									</option>
									<option value='Colorado' disabled>
										Colorado
									</option>
									<option value='Connecticut' disabled>
										Connecticut
									</option>
									<option value='Delaware' disabled>
										Delaware
									</option>
									<option value='Florida' disabled>
										Florida
									</option>
									<option value='Georgia' disabled>
										Georgia
									</option>
									<option value='Hawaii' disabled>
										Hawaii
									</option>
									<option value='Idaho' disabled>
										Idaho
									</option>
									<option value='Illinois' disabled>
										Illinois
									</option>
									<option value='Indiana' disabled>
										Indiana
									</option>
									<option value='Iowa' disabled>
										Iowa
									</option>
									<option value='Kansas' disabled>
										Kansas
									</option>
									<option value='Kentucky' disabled>
										Kentucky
									</option>
									<option value='Louisiana' disabled>
										Louisiana
									</option>
									<option value='Maine' disabled>
										Maine
									</option>
									<option value='Maryland' disabled>
										Maryland
									</option>
									<option value='Massachusetts' disabled>
										Massachusetts
									</option>
									<option value='Michigan' disabled>
										Michigan
									</option>
									<option value='Minnesota' disabled>
										Minnesota
									</option>
									<option value='Mississippi' disabled>
										Mississippi
									</option>
									<option value='Missouri' disabled>
										Missouri
									</option>
									<option value='Montana' disabled>
										Montana
									</option>
									<option value='Nebraska' disabled>
										Nebraska
									</option>
									<option value='Nevada' disabled>
										Nevada
									</option>
									<option value='New Hampshire' disabled>
										New Hampshire
									</option>
									<option value='New Jersey' disabled>
										New Jersey
									</option>
									<option value='New Mexico' disabled>
										New Mexico
									</option>
									<option value='New York' disabled>
										New York
									</option>
									<option value='North Carolina' disabled>
										North Carolina
									</option>
									<option value='North Dakota' disabled>
										North Dakota
									</option>
									<option value='Ohio' disabled>
										Ohio
									</option>
									<option value='Oklahoma' disabled>
										Oklahoma
									</option>
									<option value='Oregon'>Oregon</option>
									<option value='Pennsylvania' disabled>
										Pennsylvania
									</option>
									<option value='Rhode Island' disabled>
										Rhode Island
									</option>
									<option value='South Carolina' disabled>
										South Carolina
									</option>
									<option value='South Dakota' disabled>
										South Dakota
									</option>
									<option value='Tennessee' disabled>
										Tennessee
									</option>
									<option value='Texas' disabled>
										Texas
									</option>
									<option value='Utah' disabled>
										Utah
									</option>
									<option value='Vermont' disabled>
										Vermont
									</option>
									<option value='Virginia' disabled>
										Virginia
									</option>
									<option value='Washington'>
										Washington
									</option>
									<option value='West Virginia' disabled>
										West Virginia
									</option>
									<option value='Wisconsin' disabled>
										Wisconsin
									</option>
									<option value='Wyoming' disabled>
										Wyoming
									</option>
								</select>
								{/* <label>State</label> */}
							</div>
						</div>
						<button
							className='btn waves-effect waves-light'
							type='submit'
							name='action'
						>
							Submit
							<i className='material-icons right'></i>
						</button>
						<Link to='/newlocation'>
							<button
								className='btn waves-effect waves-light'
								type='submit'
								name='action'
							>
								Add New Location
								<i className='material-icons right'></i>
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Search;
