import React, { useState, useEffect } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import {Button, Textarea, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";

const API = import.meta.env.VITE_API_URL;

function EditPostcardForm() {
	

	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState(new Date());
	const [postcard, setPostcard] = useState({
		message: "",
		name: "",
		date: "",
	});

const { id }= useParams();
	const navigate = useNavigate()

const handleMessageChange = (e) => {
           setMessage({ ...postcard, [e.target.id]: e.target.value })
	};

	const handleNameChange = (e) => {
		setName({...postcard, [e.target.id]: e.target.value});
	};

	const handleDateChange = (e) => {
		setDate({...postcard, [e.target.id]: e.target.value});
	};
	
	useEffect(() => {
		fetch(`${API}/postcards/${id}`)
			.then((response) => response.json())
			.then((postcard) => setPostcard(postcard))
			.catch((error) => console.error(error));
	}, [index, navigate])

	const httpOptions = {
		method: "PUT",
		body: JSON.stringify(postcard),
		headers: {
			"Content-Type": "application/json",
		},
	};


	const updatePostcard = () => {
		fetch(`${API}/postcards`, httpOptions)
			.then((response) => {
				alert(`{postcard.name} has been updated!`);
				navigate(`/my-postcards`);
			})
			.catch((error) => console.error(error));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		updatePostcard();
	};

	const isMesageError = !message;
	const isNameError = !name;

	return (
		<div>
			<FormControl
				isRequired
				className='create-postcard-form'
				onSubmit={handleSubmit}>
				<FormLabel>Message:</FormLabel>
				<Textarea value={postcard.message} onChange={handleMessageChange} />
				{!isMesageError ? (
					<FormHelperText>Please enter your postcard message.</FormHelperText>
				) : (
					<FormErrorMessage>Message is required.</FormErrorMessage>
				)}

				<br />
				<FormLabel>Name:</FormLabel>
				<Input type='text' value={postcard.name} onChange={handleNameChange} />
				{!isNameError ? (
					<FormHelperText>Please enter your name.</FormHelperText>
				) : (
					<FormErrorMessage>Message is required.</FormErrorMessage>
				)}
				<FormLabel optionalIndicator>Date:</FormLabel>
				<DatePicker value={postcard.date} backgroundColor='blue.500' />
				<Button colorScheme='lightgrey' onClick={handleSubmit}>
					<Link to='/my-postcards'>Submit</Link>
				</Button>
			</FormControl>
		</div>
	)
};

export default EditPostcardForm;

