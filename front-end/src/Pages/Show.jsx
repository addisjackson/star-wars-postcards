import React, { useState } from 'react';
import PostcardDetails from '../Components/PostcardDetails';
import CreatePostcardForm from '../Components/CreatePostcardForm';
import EditPostcardForm from '../Components/EditPostcardForm'


function Show() {
  return (
    <div className='postcard-container'>
      <PostcardDetails />
      <CreatePostcardForm />
    </div>
  )
}

export default Show