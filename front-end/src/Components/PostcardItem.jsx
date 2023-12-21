import React from 'react';

const PostcardItem = ({ postcard, addToCart, deleteFromCart, showDetails }) => {
  const { location, imageUrl, price, quantity, synopsis, url } = postcard;

  const truncatedSynopsis = synopsis.slice(0, Math.floor(synopsis.length * 0.1)) + '...';

  const handleMoreInfo = () => {
    // Redirect or show postcard details
    showDetails(postcard);
  };

  return (
    <div className="postcard-item">
      <img src={imageUrl} alt={location} />
      <h3>{location}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>{truncatedSynopsis}</p>
      <button onClick={() => addToCart(postcard)}>Add to Cart</button>
      <button onClick={() => deleteFromCart(postcard)}>Delete from Cart</button>
      <button onClick={handleMoreInfo}>More Info</button>
    </div>
  );
};

export default PostcardItem;
