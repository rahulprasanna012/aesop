import React, { useState } from 'react';
import Topnav from '../Topnav';
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import './index.css'
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
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item); // Toggle content
  };

  return (
    <div>
      <Topnav />
      <nav className="navbar">
        <div className="navbar-header ">
          <div className="search-container ">
            
            <input type="text" placeholder="Hey, What you looking for?" className='search-input' />
            <CiSearch size="20" />
          </div>

          <h1 className=" text-3xl">Aesop</h1>
          <div className="user-actions order-2">
            <Link to='/auth' className=''>
              <RiAccountCircleLine size="25" />
              <span>Account</span>
            </Link>
            <Link to='/cart'>
              <IoCartOutline size="25" />
              <span>Cart</span>
            </Link>
            <Link to='/wishlist'>
              <IoMdHeartEmpty size="25" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>

        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <button onClick={() => handleItemClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Section */}
      {activeItem && (
        <div className="content-section">
          <h2>{activeItem}</h2>
          <p>
            This is some content related to <strong>{activeItem}</strong>. You
            can add more detailed information or elements here.
          </p>
          <button onClick={() => setActiveItem(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
