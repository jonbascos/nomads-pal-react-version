import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "./services/firebase";
import M from "materialize-css";

const NewLocation = (props) => {
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
				imageUrl: props.inputData.imageUrl,
			})
			.then(() => {
				console.log("Document Successfully Written");
				history.push("/");
			})
			.catch((e) => {
				console.log("Error: ", e);
			});
	};

	console.log("inputData: ", props.inputData);

	return (
		<form className='col s12' onSubmit={handleSubmit}>
			<h3>Add New Location</h3>
			<div className='row'>
				<div className='input-field col s12'>
					<input
						type='text'
						name='locationName'
						value={props.inputData.locationName}
						placeholder='Name of Location'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s12'>
					<input
						type='text'
						name='streetAddress'
						value={props.inputData.streetAddress}
						placeholder='Street Address'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s6'>
					<input
						type='text'
						name='city'
						value={props.inputData.city}
						placeholder='City'
						onChange={handleChange}
					/>
				</div>
				<div className='input-field col s6'>
					<input
						type='text'
						name='state'
						value={props.inputData.state}
						placeholder='State (no abbreviations)'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s6'>
					<input
						type='text'
						name='uploadSpeed'
						value={props.inputData.uploadSpeed}
						placeholder='Upload Speed in Mbps'
						onChange={handleChange}
					/>
				</div>
				<div className='input-field col s6'>
					<input
						type='text'
						name='downloadSpeed'
						value={props.inputData.downloadSpeed}
						placeholder='Download Speed in Mbps'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s12'>
					<input
						type='text'
						name='website'
						value={props.inputData.website}
						placeholder='Website'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s12'>
					<input
						type='text'
						name='imageUrl'
						value={props.inputData.imageUrl}
						placeholder='URL for image'
						onChange={handleChange}
					/>
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
		</form>
	);
};

export default NewLocation;
