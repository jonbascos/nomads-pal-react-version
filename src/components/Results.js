import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Results = (props) => {
	console.log("From Results: ", props);

	useEffect(() => {
		M.AutoInit();
	}, []);

	return <div></div>;
};

export default Results;
