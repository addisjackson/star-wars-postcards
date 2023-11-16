import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button, Textarea, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";

const API = import.meta.env.VITE_API_URL;

function CreatePostcardForm() {
	const navigate = useNavigate();

	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState(new Date());
	const [postcard, setPostcard] = useState({
		message: "",
		name: "",
		date: "",
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
				navigate(`/my-postcards`);
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

	const isMesageError = !message;
	const isNameError = !name;

	return (
		<div>
			<FormControl isRequired className='create-postcard-form' onSubmit={handleSubmit}>
				<FormLabel>Message:</FormLabel>
				<Textarea value={message} onChange={handleMessageChange} />
				 {!isMessageError ? (
        						<FormHelperText>
          						Please enter your postcard message.
        						</FormHelperText>
     					 ) : (
        						<FormErrorMessage>Message is required.</FormErrorMessage>
      				)}

				<br />
				<FormLabel>Name:</FormLabel>
				<Input
					type='text'
					value={name}
					onChange={handleNameChange}
				/>
				<FormLabel optionalIndicator>Date:</FormLabel>
				<DatePicker onChange={handleDateChange} value={date} backgroundColor="blue.500" />
				<Button colorScheme='lightgrey' onClick={ handleSubmit }>
					Submit
				</Button>
			</FormControl>
		</div>
	);
}

export default CreatePostcardForm;

