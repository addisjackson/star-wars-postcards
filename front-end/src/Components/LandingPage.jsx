import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  // Handle click event for entering postcards page
  const enterPostcardsPage = () => {
    // Redirect to /postcards
  };

  return (
    <div className="landing-page">
      {/* Star Wars themed background */}
     <h1>Welcome to Star Wars Post Cards!</h1>
      <button onClick={enterPostcardsPage}>Enter The Dream</button>
    </div>
  );
};

export default LandingPage;
