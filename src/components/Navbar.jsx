import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/navbar/fitness.svg';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <nav className="bg-black p-4 text-white border-b-2 border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Gym Icon" className="h-8 w-24" /> {/* Adjust size as needed */}
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none "
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" /> // Close icon
            ) : (
              <FaBars className="w-6 h-6" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 md:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300 ease-in-out block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="hover:text-gray-300 transition duration-300 ease-in-out block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              to="/classes"
              className="hover:text-gray-300 transition duration-300 ease-in-out block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-300 transition duration-300 ease-in-out block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-300  items-center transition duration-300 ease-in-out block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart className="w-6 h-6" /> {/* Cart Icon */}
              {cart.length > 0 && (
                <span className="ml-1 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
          <li >
            <Link
              to="/login"
              className=" border border-white rounded-3xl px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out block mt-2 md:mt-0 md:inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="border border-white rounded-3xl px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out block mt-2 md:mt-0 md:inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;