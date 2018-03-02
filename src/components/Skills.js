import React from 'react';

const Skills = () => (
	<div className="row skill">
		<div className="three columns header-col">
			<h1>
				<span>Skills</span>
			</h1>
		</div>

		<div className="nine columns main-col">
			<p>
				Due to my background, I have a very diverse set of skills. I am looking
				to focus on development for the future, as I would like to particpate on
				teams where I play a more active role that isn't involved in Growth or
				Data Science. Therefore, I would prefer to stick with companies looking
				to recruit someone with Full Stack capabilities. Please check below for
				my favorite technologies of 2018 to find out more about what I am
				interested in working with!
			</p>

			<div className="bars">
				<ul className="skills">
					<li>
						<span className="bar-expand photoshop" />
						<em>ReactJS</em>
					</li>
					<li>
						<span className="bar-expand illustrator" />
						<em>GraphQL</em>
					</li>
					<li>
						<span className="bar-expand wordpress" />
						<em>Apollo / Relay</em>
					</li>
					<li>
						<span className="bar-expand css" />
						<em>CSS / SCSS / LESS</em>
					</li>
					<li>
						<span className="bar-expand html5" />
						<em>Node Frameworks</em>
					</li>
					<li>
						<span className="bar-expand nodejs" />
						<em>Severless</em>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Skills;
