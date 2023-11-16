import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {Heading, Button} from '@chakra-ui/react'

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
    <div className='postcard-details'>
      <Image src={postcards.image_url}></Image>
      <Heading as='h3'>{ postcards.name }</Heading>
      <br />
      <Heading as='h4'>{ planet.population }</Heading>
      <br />
      <span>{ planet.terrain }</span>
      <br />
      { planet.residents.map( ( resident ) =>
      {
        return (
        <p>{resident}</p>
        )
      })}
      <br />
      <br />
      <Button colorScheme='lightgrey' onClick={handleDelete}></Button>
    </div> 
  )
}

export default PostcardDetails