import React from "react";
import { Link as RRLink } from 'react-router-dom';
import {Link} from '@chakra-ui/react';
import "../src/Stylesheets/footer.css";

function Footer() {
	return (
			<footer className='star-wars-postcards-footer'>
				<nav className='footer-nav'>
					<Link as={RRLink} to='/'>Home</Link>
					<Link as={RRLink} to='/postcards'>Postcards</Link>
					<Link as={RRLink} to='/mypostcards'>My Postcards</Link>
				</nav>
				<span>
					Star Wars Postcards, All Rights Reserved. 2023
				</span>
			</footer>
		
	);
};

export default Footer;
