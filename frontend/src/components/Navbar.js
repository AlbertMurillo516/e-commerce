import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          E-Commerce
        </Link>
        <div>
          <Link to="/cart" className="text-white hover:text-gray-200">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;