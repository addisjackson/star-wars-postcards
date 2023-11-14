import React from "react";

import PropTypes from "prop-types";

import "../src/Stylesheets/footer.css";

const Footer = (props) => {
	return (
		<div className={`footer-container ${props.rootClassName} `}>
			<footer className='footer-footer'>
				<div className='footer-container1'>
					<nav className='footer-nav'>
						<span className='footer-text'>Home</span>
						<span className='footer-text1'>Postcards</span>
						<span className='footer-text2'>My Postcards</span>
					</nav>
				</div>
				<span className='footer-text3'>
					© 2023 Star Wars Postcards, All Rights Reserved.
				</span>
				<div className='footer-separator'></div>
				<div className='footer-container2'></div>
			</footer>
		</div>
	);
};

Footer.defaultProps = {
	rootClassName: "",
};

Footer.propTypes = {
	rootClassName: PropTypes.string,
};

export default Footer;
