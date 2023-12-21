import React from 'react';
import PostcardItem from './PostcardItem';

const PostcardsList = ({ postcards, addToCart, deleteFromCart, showDetails }) => {
  return (
    <div className="postcards-list">
      {postcards.map((postcard) => (
        <PostcardItem
          key={postcard.id} // Assuming each postcard has a unique ID
          postcard={postcard}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
};

export default PostcardsList;
