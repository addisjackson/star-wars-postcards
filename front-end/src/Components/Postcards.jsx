import { useState, useEffect, useMemo } from "react";
import Postcard from "./Postcard";

const API = import.meta.env.VITE_API_URL;

function Postcards() {
  const [postcards, setPostcards] = useState({
		message: "",
		name: "",
		date: "",
	});

	useEffect(() => {
		fetch(`${API}/postcards`)
			.then((response) => response.json())
			.then((postcards) => setPostcard(postcard))
			.catch((error) => console.log(error));
	}, []);

	

	return (
		<div className='Postcards'>
			<section>
				<table>
					<thead>
						<tr>
							<th>Message</th>
							<th>Name</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{postcards.map((postcard, index) => {
							return (
								<Postcard
									key={index}
									postcard={postcard}
									index={index}
								/>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default Postcards;
