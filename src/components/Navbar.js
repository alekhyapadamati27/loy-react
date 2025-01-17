import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/booking">Book Your Truck</Link></li>
        <li><Link to="/available-lorries">Available Lorries</Link></li>
        <li><Link to="/add-lorry">Add Lorry</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;