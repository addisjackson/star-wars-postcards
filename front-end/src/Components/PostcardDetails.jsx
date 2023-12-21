import React from 'react';

const PostcardDetails = ({ postcard, addToCart, deleteFromCart }) => {
  const { location, imageUrl, price, quantity, synopsis, url } = postcard;

  return (
    <div className="postcard-details">
      <img src={imageUrl} alt={location} />
      <h2>{location}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Synopsis: {synopsis}</p>
      <p>URL: {url}</p>
      <button onClick={() => addToCart(postcard)}>Add to Cart</button>
      <button onClick={() => deleteFromCart(postcard)}>Delete from Cart</button>
    </div>
  );
};

export default PostcardDetails;
