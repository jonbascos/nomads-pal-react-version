import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "./services/firebase";
import M from "materialize-css";

const NewLocation = (props) => {
	// const [inputData, setInputData] = useState({
	// 	locationName: "",
	// 	city: "",
	// 	state: "",
	// });

	const history = useHistory();

	useEffect(() => {
		M.AutoInit();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		props.setInputData((prevInputData) => {
			return {
				...prevInputData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection("locations")
			.add({
				name: props.inputData.locationName.toLowerCase(),
				streetAddress: props.inputData.streetAddress.toLowerCase(),
				city: props.inputData.city.toLowerCase(),
				state: props.inputData.state.toLowerCase(),
				phoneNumber: props.inputData.phoneNumber,
				uploadSpeed: props.inputData.uploadSpeed,
				downloadSpeed: props.inputData.downloadSpeed,
				website: props.inputData.website,
			})
			.then(() => {
				console.log("Document Successfully Written");
				history.push("/");
			})
			.catch((e) => {
				console.log("Error: ", e);
			});
	};

	console.log(props.inputData);

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add New Location</h3>
			{/* <label>Location Name:</label> */}
			<input
				type='text'
				name='locationName'
				value={props.inputData.locationName}
				placeholder='Name of Location'
				onChange={handleChange}
			/>

			<input
				type='text'
				name='streetAddress'
				value={props.inputData.streetAddress}
				placeholder='Street Address'
				onChange={handleChange}
			/>
			{/* <label>City:</label> */}
			<input
				type='text'
				name='city'
				value={props.inputData.city}
				placeholder='City'
				onChange={handleChange}
			/>

			{/* <label>State</label> */}
			<input
				type='text'
				name='state'
				value={props.inputData.state}
				placeholder='State (no abbreviations)'
				onChange={handleChange}
			/>

			<input
				type='text'
				name='uploadSpeed'
				value={props.inputData.uploadSpeed}
				placeholder='Upload Speed in Mbps'
				onChange={handleChange}
			/>

			<input
				type='text'
				name='downloadSpeed'
				value={props.inputData.downloadSpeed}
				placeholder='Download Speed in Mbps'
				onChange={handleChange}
			/>
			<button
				className='btn waves-effect waves-light'
				type='submit'
				name='action'
			>
				Submit
				<i className='material-icons right'></i>
			</button>
		</form>
	);
};

export default NewLocation;
