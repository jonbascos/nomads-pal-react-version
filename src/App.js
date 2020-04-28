import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/css/App.css";
import "materialize-css/dist/css/materialize.min.css";
import { db } from "./components/services/firebase";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import About from "./components/About";
import DigitalNomad from "./components/DigitalNomad";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Results from "./components/Results";
import NewLocation from "./components/NewLocation";

function App() {
	const [locations, setLocations] = useState([]);
	const [results, setResults] = useState([]);

	// Retrieves all locations in the firestore DB
	useEffect(() => {
		console.log("db Mounted");
		db.collection("locations")
			.get()
			.then((snapshot) => {
				const allLocations = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					allLocations.push(data);
					// console.log("Data: ", data);
				});
				setLocations(allLocations);
			});
	}, []);

	// From NewLocations.js
	const [inputData, setInputData] = useState({
		locationName: "",
		streetAddress: "",
		city: "",
		state: "",
		phoneNumber: "",
		uploadSpeed: "",
		downloadSpeed: "",
		website: null,
		imageUrl: null,
	});

	// From SearchBox.js
	const [search, setSearch] = useState({
		city: "",
		state: "",
	});

	return [
		<section>
			<header>
				<Header />
			</header>
			<main>
				<Switch>
					<Route exact path='/'>
						<SearchBox
							search={search}
							setSearch={setSearch}
							locations={locations}
							setLocations={setLocations}
							results={results}
							setResults={setResults}
						/>
					</Route>
					<Route path='/about'>
						<About />
					</Route>

					<Route path='/digitalnomad'>
						<DigitalNomad />
					</Route>

					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/results'>
						<Results results={results} />
					</Route>

					<Route path='/newlocation'>
						<NewLocation
							inputData={inputData}
							setInputData={setInputData}
						/>
					</Route>
				</Switch>
			</main>
			<footer>
				<Footer />
			</footer>
		</section>,
	];
}

export default App;
