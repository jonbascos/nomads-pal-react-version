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
			<footer className='page-footer'>
				<div className='footer-copyright'>
					<div className='container'>
						© 2020 MedicTo.Dev
						<a className='grey-text text-lighten-4 right' href='#!'>
							<a
								href='mailto:info@nomadspal.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								info@nomadspal.com
							</a>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
