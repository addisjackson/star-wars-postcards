import React, { useState, useEffect } from "react";
import { Stack } from "@chakra-ui/react";
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
			.then(postcards => setPostcards(postcards))
			.catch((error) => console.log(error));
	}, []);

	
	return (
		<Stack>
			<div className='Postcards'>
				{ postcards.map( ( postcard, index ) =>
				{
				return (
					<Postcard
						key={id}
						postcard={postcard}
						index={index}
								/>
					);
				})}
			</div>
		</Stack>
			);
}

export default Postcards;
