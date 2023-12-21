import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Star Wars Postcards</h1>
      <nav>
        <Link to="/postcards">Postcards</Link>
        <Link to="/planets">Planets</Link>
      </nav>
      {/* SearchBar Component */}
      {/* Filter Component */}
    </header>
  );
};

export default Header;
