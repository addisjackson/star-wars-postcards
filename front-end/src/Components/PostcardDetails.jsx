import { useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

const API = import.meta.env.VITE_API_URL
function PostcardDetails() {
  const [ postcard, setPostcard ] = useState("");


  return (
	<div>PostcardDetails</div>
  )
}

export default PostcardDetails