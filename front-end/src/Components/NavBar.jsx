import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<div className='SW-Postcards'>
				<h1>
					<Link to="/">Star Wars Postcards</Link>	
				</h1>
			</div>
			<div className='New-Postcard'>
				<button>
					<Link to='/postcards/'>New Postcard</Link>
				</button>
			</div>
		</nav>
	);
}

export default NavBar