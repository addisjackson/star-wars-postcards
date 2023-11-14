import React from "react";

import PropTypes from "prop-types";

import "../src/Stylesheets/hero.css";

const Hero = () =>
{
	return (
		<div id='home-page' className={ "hero-section" }>
			<h1 className='hero-heading'>Star Wars Postcards</h1>
			<span className='hero-text1'>
				Your Premium Venue for All Your Interstellar Communication Needs
			</span>
		</div>
	);
};

export default Hero;
