import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/css/App.css";
import "materialize-css/dist/css/materialize.min.css";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import About from "./components/About";
import DigitalNomad from "./components/DigitalNomad";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Results from "./components/Results";
import NewLocation from "./components/NewLocation";

function App() {
	// From NewLocations.js
	const [inputData, setInputData] = useState({
		locationName: "",
		city: "",
		state: "",
	});

	// From SearchBox.js
	const [search, setSearch] = useState({
		city: "",
		state: "",
	});
	const [locations, setLocations] = useState([]);
	const [results, setResults] = useState([]);

	return (
		<main>
			<Header />
			<div className='main-body'>
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
			</div>

			<Footer />
		</main>
	);
}

export default App;
