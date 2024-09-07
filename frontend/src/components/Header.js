import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">note</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by keyword or creator" />
      </div>
      <div className="auth-buttons">
        <button className="login-button">Log In</button>
        <button className="membership-button">Membership Registration</button>
      </div>
    </header>
  );
}

export default Header;