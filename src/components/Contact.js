import React from 'react';
import '../static/css/Contact.css';

function Contact(props) {
	const twitter = 'https://www.twitter.com/nomadspal';
	return (
		<div className='contact-container'>
			<h4>Contact Us</h4>
			Email:{' '}
			<a
				href='mailto:info@nomadspal.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				info@nomadspal.com
			</a>
			<br />
			<address>
				Mailing Address:
				<br /> PO Box 11323
				<br />
				Oregon City, OR 97045
			</address>
			<h5>Social Media</h5>
			<a href={twitter} target='_blank' rel='noopener noreferrer'>
				Twitter
			</a>
		</div>
	);
}

export default Contact;
