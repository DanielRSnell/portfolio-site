import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
	<div className="row banner">
		<div className="banner-text">
			<h1 className="responsive-headline">I'm Daniel Snell.</h1>
			<h3>
				I'm a United States based <span>full stack developer, </span>
				<span> {'UX'} </span> and <span>Growth Expert</span> helping to create
				awesome companies achieve amazing results around the globe. Let's see
				what we can achieve together!
			</h3>
			<hr />
			<SocialLinks />
		</div>
	</div>
);

export default Banner;
