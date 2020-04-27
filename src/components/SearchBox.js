import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../static/css/SearchBox.css";
import M from "materialize-css";

import { db } from "./services/firebase";

function Search(props) {
	const history = useHistory();

	// Retrieves all locations from firestore
	// useEffect(() => {
	// 	console.log("db Mounted");
	// 	db.collection("locations")
	// 		.get()
	// 		.then((snapshot) => {
	// 			const allLocations = [];
	// 			snapshot.forEach((doc) => {
	// 				const data = doc.data();
	// 				allLocations.push(data);
	// 				console.log("Data: ", data);
	// 			});
	// 			props.setLocations(allLocations);
	// 		});
	// }, []);

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

	// console.log("Locations: ", props.locations);
	// console.log("Search: ", props.search);
	// console.log("Results from SearchBox: ", props.results);

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
									<option value='Alabama'>Alabama</option>
									<option value='Alaska'>Alaska</option>
									<option value='Arizona'>Arizona</option>
									<option value='Arkansas'>Arkansas</option>
									<option value='California'>
										California
									</option>
									<option value='Colorado'>Colorado</option>
									<option value='Connecticut'>
										Connecticut
									</option>
									<option value='Delaware'>Delaware</option>
									<option value='Florida'>Florida</option>
									<option value='Georgia'>Georgia</option>
									<option value='Hawaii'>Hawaii</option>
									<option value='Idaho'>Idaho</option>
									<option value='Illinois'>Illinois</option>
									<option value='Indiana'>Indiana</option>
									<option value='Iowa'>Iowa</option>
									<option value='Kansas'>Kansas</option>
									<option value='Kentucky'>Kentucky</option>
									<option value='Louisiana'>Louisiana</option>
									<option value='Maine'>Maine</option>
									<option value='Maryland'>Maryland</option>
									<option value='Massachusetts'>
										Massachusetts
									</option>
									<option value='Michigan'>Michigan</option>
									<option value='Minnesota'>Minnesota</option>
									<option value='Mississippi'>
										Mississippi
									</option>
									<option value='Missouri'>Missouri</option>
									<option value='Montana'>Montana</option>
									<option value='Nebraska'>Nebraska</option>
									<option value='Nevada'>Nevada</option>
									<option value='New Hampshire'>
										New Hampshire
									</option>
									<option value='New Jersey'>
										New Jersey
									</option>
									<option value='New Mexico'>
										New Mexico
									</option>
									<option value='New York'>New York</option>
									<option value='North Carolina'>
										North Carolina
									</option>
									<option value='North Dakota'>
										North Dakota
									</option>
									<option value='Ohio'>Ohio</option>
									<option value='Oklahoma'>Oklahoma</option>
									<option value='Oregon'>Oregon</option>
									<option value='Pennsylvania'>
										Pennsylvania
									</option>
									<option value='Rhode Island'>
										Rhode Island
									</option>
									<option value='South Carolina'>
										South Carolina
									</option>
									<option value='South Dakota'>
										South Dakota
									</option>
									<option value='Tennessee'>Tennessee</option>
									<option value='Texas'>Texas</option>
									<option value='Utah'>Utah</option>
									<option value='Vermont'>Vermont</option>
									<option value='Virginia'>Virginia</option>
									<option value='Washington'>
										Washington
									</option>
									<option value='West Virginia'>
										West Virginia
									</option>
									<option value='Wisconsin'>Wisconsin</option>
									<option value='Wyoming'>Wyoming</option>
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
