import React, { useEffect } from "react";

import M from "materialize-css";
import "../static/css/Footer.css";

function Footer(props) {
	// Auto Initialize all of Materialize CSS
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<div>
			<footer class='page-footer'>
				<div class='footer-copyright'>
					<div class='container'>
						© 2020 MedicTo.Dev
						<a class='grey-text text-lighten-4 right' href='#!'>
							info@nomadspal.com
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
