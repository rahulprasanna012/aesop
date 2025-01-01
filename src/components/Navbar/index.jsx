import React, { useState } from 'react';
import Topnav from '../Topnav';
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import './index.css';
import { Link } from 'react-router-dom';

const navItems = [
  "New & Notable",
  "Gifts",
  "Skin Care",
  "Hand & Body",
  "Home",
  "Hair",
  "Fragrance",
  "Kits & Travel",
  "Read",
  "Stores",
  "Facial",
  "Appointments",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // State to track active item

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle the menu item click and set it as active
  const handleMenuItemClick = (item) => {
    setActiveItem(item); // Set clicked item as active
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div>
      <Topnav />
      <nav className="navbar mt-5">
        <div className="navbar-header">
          <div className="search-container px-4 h-10">
            <input 
              type="text" 
              placeholder="Hey, what are you looking for?" 
              className='search-input w-full outline-none' 
            />
            <CiSearch size="20" />
          </div>
          <div className='logo-card'>
            <div className='leading-7'>
              <h1 className="logo">Aesop</h1>
              <p className='text-[15px] mt-3'>TRUSTED ONLINE SHOPPING</p>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          
          <div className="user-actions">
            <Link to='/auth' className='link'>
              <RiAccountCircleLine size="25" />
              <span>Account</span>
            </Link>
            <Link to='/cart' className='link'>
              <IoCartOutline size="25" />
              <span>Cart</span>
            </Link>
            <Link to='/wishlist' className='link'>
              <IoMdHeartEmpty size="25" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>

        {/* Navbar Menu for Desktop and Mobile */}
        <ul className={`navbar-menu ${isMenuOpen ? 'show-menu' : ''}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={item === activeItem ? "isClicked" : "navbar-item"}
              onClick={() => handleMenuItemClick(item)} // Pass item as argument
            >
              <Link to={`/${item.replace(/ & /g, "-").toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
