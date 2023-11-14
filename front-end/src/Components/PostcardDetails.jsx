import { useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

const API = import.meta.env.VITE_API_URL
function PostcardDetails() {
  const [ postcard, setPostcard ] = useState( {
    message: "",
    name: "",
    date: ""
  } );

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch( `${ API }/postcards/${ index }` )
    .then( ( response ) => response.json() )
    .then((postcard) => setPostcard(postcard))
  .catch(() => {navigate("/Four0Four")})
    
  }, [ index, navigate ] )
  
  const handleDelete = () =>
  {
    const httpOptions = { method: "DELETE" };

    fetch( `${ API }/postcard/${ index }`, httpOptions )
      .then( () =>
      {
        alert( "Your postcard has been deleted!" );
        navigate( `/postcards` );
      } )
      .catch( ( error ) => console.error( error ) );
  }
   

  return (
	<div></div> 

  )
}

export default PostcardDetails