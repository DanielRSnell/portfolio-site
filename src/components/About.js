import React from 'react';
import { FaLinkedinSquare } from 'react-icons/lib/fa';

const profilePic = 'https://media.graphcms.com/VsTNwFPQskMXFIVsxqQB';

const About = () => (
	<section id="about">
		<div className="row">
			<div className="three columns">
				<img className="profile-pic" src={profilePic} alt="" />
			</div>
			<div className="nine columns main-col">
				<h2>About Me</h2>
				<p>
					I have been in the technology field for over 5 years and I started out
					as a developer then moved into User Experience and Growth. After three
					years of indpendent consulting for venture backed startups I took the
					path of a data science focused on learning models and analytic
					implementation for a multitude of startups ranging from SaaS, Mobile,
					to eCommerce. I helped these teams gain traction, as well as implement
					a fundamental knowledge of user behavior and experience. During my
					time, I acquired a passion for working with code and sought to move
					back towards my roots as a developer. So that I could bring my growth
					knowledge and user experience expertise into the development
					enviroment to create customer first driven applications and APIs
					in-order to achieve product-market fit faster for clients.
				</p>
				<div className="row">
					<div className="columns contact-details">
						<h2>Contact Details</h2>
						<p className="address">
							<span>Daniel Snell</span>
							<br />
							<span>Virginia Beach, VA, 23455 US</span>
							<br />
							<span>(757)-274-4777</span>
							<br />
							<span>hello@danielsnell.ninja</span>
						</p>
					</div>
					<div className="columns download">
						<p>
							<a href="#" className="button">
								<FaLinkedinSquare />
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
