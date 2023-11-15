import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function NavBar() {
	return (
		<nav>
			<div className='SW-Postcards'>
				<h1>
					<Link as={RRLink} to='/'>
						Star Wars Postcards
					</Link>
				</h1>
			</div>
			<div className='New-Postcard'>
				<button>
					<Link as={RRLink} to='/postcards/'>
						New Postcard
					</Link>
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
