import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CreatePostcardForm() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("")
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [postcard, setPostcard] = useState({
		message: "",
		name: "",
		date: ""
	});

	const createPostcard = () => {
		const httpOptions = {
			method: "POST",
			body: JSON.stringify(postcard),
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch(`${API}/postcards`, httpOptions)
			.then((response) => {
				alert(`{postcard.name} was added to the database!`);
				navigate(`/postcards`);
			})
			.catch((error) => console.error(error));
	};
	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
	};
	

	const handleSubmit = (e) => {
		e.preventDefault();
		createPostcard();
	};

	return (
		<div>
      <form className='create-postcard-form' onSubmit={ handleSubmit }>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" onChange={handleMessageChange} value={message} cols="30" rows="10"></textarea>
				<br />
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={handleNameChange}
				/>
				<label htmlFor='date'>Date:</label>
				<input
					type='date'
					name='date'
					id='date'
					value={date}
					onChange={handleDateChange}
				/>
			</form>
		</div>
	);
}

export default CreatePostcardForm;
