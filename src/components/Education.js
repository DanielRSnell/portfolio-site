import React from 'react';

const Education = () => (
	<div className="row education">
		<div className="three columns header-col">
			<h1>
				<span>Education</span>
			</h1>
		</div>

		<div className="nine columns main-col">
			<div className="row item">
				<div className="twelve columns">
					<h3>Udacity</h3>
					<p className="info">
						Machine Learning Engineer
						<span>&bull;</span>
						<em className="date">October 2016</em>
					</p>

					<p>
						Due to the limited number of resources currently available on Data
						science I decided to join Udacities Machine Learning program, as
						well as Deep Learning in-order to learn more about machine learning
						modeling, as well as soldify my background in Python and Data
						Manipulation.
					</p>
				</div>
			</div>

			<div className="row item">
				<div className="twelve columns">
					<h3>Lifetime Learner</h3>
					<p className="info">
						Learning all the time
						<span>&bull;</span>
						<em className="date">Everyday</em>
					</p>

					<p>
						I felt early on in my career that there was no specific path other
						than to learn and absorb as much as I could about popular and
						upcoming technologies over the years. Much of my time has been
						focused on learning both Growth and Development, mostly focused on
						learning the latest technologies as they hit the scene such as
						React, GraphQL, Tensor Flow, and many more.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Education;
