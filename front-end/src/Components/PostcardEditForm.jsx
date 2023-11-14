import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function PostcardEditForm() {
  const [message, setMessage] = useState("")
  const [name, setName ] = useState( "" );
  const [ date, setDate] = useState("")
	const [postcard, setPostcard] = useState({
    message: "",
    MeasetMessage: "",
    date: ""
	});

	let { index } = useParams();
	const navigate = useNavigate();

  const handleMessageChange = (e) => {
	  setMessage({ ...postcard, [e.target.id]: e.target.value });
	};

	const handleNameChange = (e) => {
		setName({ ...postcard, [e.target.id]: e.target.value });
	};

	const handleDateChange = (e) => {
		setDate({ ...postcard, [e.target.id]: e.target.value });
	};


	useEffect(() => {
		fetch(`${API}/postcards/${index}`)
			.then((response) => response.json())
			.then((postcard) => setPostcard(postcard))
			.catch((error) => console.error(error));
	}, [index, navigate]);

	const httpOptions = {
		method: "PUT",
		body: JSON.stringify(postcard),
		headers: {
			"Content-Type": "application/json",
		},
	};

	const updatePostcard = () => {
		fetch(`${API}/postcards/${index}`, httpOptions)
			.then(() => {
				alert(`${postcard.name} has been updated!`);
				navigate(`/postcards/${index}`);
			})
			.catch((error) => console.error("catch", error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updatePostcard();
	};

	return (
		<div>
      <form className='edit-postcard-form' onSubmit={ handleSubmit }>
        <label htmlFor="message">Message:</label>
				<textarea name="message" id="message" onChange={handleMessageChange} cols="30" rows="10"></textarea>
        <br />
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={postcard.name}
					onChange={handleNameChange}
				/>
				<br />
				<label htmlFor='date'>Date:</label>
				<input
					type='date'
					name='date'
					id='date'
					value={postcard.date}
					onChange={handleDateChange}
				/>
			</form>
		</div>
	);
}

export default postcardsEditForm;
