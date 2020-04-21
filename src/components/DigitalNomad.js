import React from "react";
import "../static/css/DigitalNomads.css";
import nomadReport from "../static/what_is_a_digital_nomad.pdf";

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
				<h3>How to Become a Digital Nomad</h3>
				<p>
					There are pros as well as cons in becoming a Digital Nomad.
					You have remote work, you can travel the world go to
					tropical islands and you won’t be out of budget because you
					will be getting paid while doing so. Becoming a digital
					nomad is not only for the woke. This might become your only
					option to maintain your life and earn while on the go. Most
					people follow this profession because they are fed up with
					their tiresome, stressful and hectic 9 to 5 routine and
					their over the shoulder boss.
				</p>
				To become a Digital Nomad, one must be keen on some important
				things:
				<ol>
					<li>
						Eliminating the unnecessary Expenses: To become a
						digital nomad, the first and the basic step is to cut
						you credit card debt, payments and any other debt, which
						you are currently in. eliminating every sort of
						unnecessary expenses can help you in living affordably
						while exploring the world.
					</li>

					<li>
						Get your Phone Unlocked: Getting your phone unlocked
						will allow you to use any SIM card with any network,
						basically it is set on roaming and will help you in
						setting your plan, regarding to the country you are
						currently travelling to.
					</li>
					<li>
						Join a digital nomad community: Now you need to connect
						with like-minded people, by joining some online
						worldwide digital nomad communities, forums, social
						media groups. This will help you in recognizing your
						skills, building you own business, learning new skills,
						the market demand, quality of life and the best
						countries to visit.
					</li>
					<li>
						Identify and Build your skill: You must need to know
						which major skills you possess and either you can
						develop it or not. You can focus on the things which you
						like to do, such as typing, managing stuff, using
						computer, research, etc. If you do not possess any
						specific skill, then you can work on one, by first
						analyzing the market demands and then becoming an ace in
						it, such as Building websites, apps, analyzing data,
						data entry, virtual assistant, etc.
					</li>
					<li>
						Sell your services: You must know how to sell your
						skills and your business. You can succeed as a digital
						nomad and as a freelancer, if you sell your services on
						the proper platform, by convincing the organization and
						buyer that you are the one. As a digital nomad, you are
						a one-man army, you must know how to sell your skills
						and you are competing with the whole world as you have
						lost the location perk. In other words, you can say, in
						order to become a successful digital nomad, you must
						have another skill, that is sales and marketing. You can
						join some famous online communities like Upwork or
						Fiverr, to sell your skills and services. Demands of
						Online Professions like Virtual Assistant, Proofreading
						and Transcribing is increasing at a fast rate.
					</li>
					<li>
						Alternative: Get a remote job: If you are in no hurry in
						becoming a digital nomad, then you can first train
						yourself by joining some company, that will teach you
						the skills which can be utilized online. In this way you
						can get experience before getting on you own. You can
						start by joining some Online Marketing Agency, and you
						can learn some great skills to become a digital nomad.
						It is basically a security for your digital nomad
						career, as you can take on some clients while you are
						doing so. After that you can join some Online community
						and establish some gigs and carry your business there,
						while marketing your skills.
					</li>
					<li>
						Remove your barriers to freedom: There a lot of factors
						which might affect your long terms travel lifestyle
						dream and they can become the biggest barrier in
						becoming a digital nomad. A few of them are:
						<ul>
							<li>Fear and Mindset</li>
							<li>Financial Commitment</li>
							<li>Relationship Commitment</li>
						</ul>
					</li>
				</ol>
				<p>
					Summary: A digital nomad life can be stressful, but the key
					is in finding your place, identifying your skills and start
					working on your goal.
				</p>
				<br />
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
