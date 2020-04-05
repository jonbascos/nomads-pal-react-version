import React from 'react';
import '../static/css/DigitalNomads.css';
import nomadReport from '../static/what_is_a_digital_nomad.pdf';

function DigitalNomad(props) {
	return (
		<div className='digitalnomads-container'>
			<div className='digitalnomads-content'>
				<h3>What is a Digital Nomad?</h3>
				<p>
					A person who does not depend upon the location and utilizes
					the technology to perform his tasks and jobs, whether the
					job is formal or informal, with a company, with some
					freelance clients or with their own business, is a Digital
					Nomad. This has become easy because of the advancements in
					technology and smartphone accessibility. A digital nomad can
					earn up to $50,000+ per year and can extend your career
					another 10 or more years.
				</p>
				<span className='download-button'>
					<a
						className='waves-effect waves-light btn-large'
						href={nomadReport}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='material-icons left'>cloud</i>Download PDF
					</a>
				</span>
			</div>
		</div>
	);
}

export default DigitalNomad;
