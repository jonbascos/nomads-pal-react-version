import React from "react";
import "../static/css/Contact.css";

function Contact(props) {
	const twitter = "https://www.twitter.com/nomadspal";
	return (
		<section className='contact-container'>
			<h4>Contact Us</h4>
			Email:{" "}
			<a
				href='mailto:info@nomadspal.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				info@nomadspal.com
			</a>
			<br />
			<h5>Social Media</h5>
			<a href={twitter} target='_blank' rel='noopener noreferrer'>
				Twitter
			</a>
		</section>
	);
}

export default Contact;
