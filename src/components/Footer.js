import React, { useEffect } from 'react';
import '../static/css/Footer.css';
import M from 'materialize-css';

function Footer(props) {
	// Auto Initialize all of Materialize CSS
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<div>
			<footer className='page-footer'>
				<div className='container'>
					<div className='footer-copyright'>
						<div className='container center'>
							Copyright © 2020 MedicToDev
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
