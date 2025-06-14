import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      { <button onClick={toggleSidebar} className="menu-toggle">
        <FaBars className="text-xl" />
      </button> }

      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-comment-dots"></i>
        </div>
        <h1>Chat App</h1>
      </div>
    </div>
  );
};

export default Navbar;






