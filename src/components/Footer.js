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
						© 2020 <a href='mailto:jon@jonbascos.com'>Jon Bascos</a>
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
					<span id='version'>v1.0</span>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
