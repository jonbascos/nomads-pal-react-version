import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

import "../static/css/Header.css";
import M from "materialize-css";

function Header(props) {
	// Auto Initialize all of Materialize CSS
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<div className='nav-styling'>
			<nav className='nav-background'>
				<div className='nav-wrapper'>
					<Link to='/' className='brand-logo'>
						<FontAwesomeIcon
							icon={faGlobeAmericas}
							className='earthIcon'
							size='md'
							color='teal'
						/>
						<span className='logo-text'>Nomad's Pal</span>
					</Link>
					<a
						href='#'
						data-target='mobile-demo'
						className='sidenav-trigger'
					>
						<i className='material-icons'>menu</i>
					</a>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About Us</Link>
						</li>
						<li>
							<Link to='/digitalnomad'>
								How to Become a Digital Nomad
							</Link>
						</li>
						<li>
							<a
								href='https://www.worldnomads.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								Travel Insurance
							</a>
						</li>
						<li>
							<Link to='/contact'>Contact Us</Link>
						</li>
						{/* <li>
							<Link to='/login' disabled>
								Login
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>

			<ul className='sidenav nav-background' id='mobile-demo'>
				<li>
					<Link to='/'>
						<span className='white-text'>Home</span>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<span className='white-text'>About Us</span>
					</Link>
				</li>
				<li>
					<Link to='/digitalnomad'>
						<span className='white-text'>
							How to Become a Digital Nomad
						</span>
					</Link>
				</li>
				<li>
					<a
						href='https://www.worldnomads.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='white-text'>Travel Insurance</span>
					</a>
				</li>
				<li>
					<Link to='/contact'>
						<span className='white-text'>Contact Us</span>
					</Link>
				</li>
				<li>
					<Link to='/login'>
						<span className='white-text'>Login</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
