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


// const navItemsDetails=[{
//   id:navItems[0],
//   title:navItems[0],
//   listOfItems:[{title: 'New additions',items:["Top-to-Toe Trio","Citrus Fragrance Duo","Polish & Replenish Hand Duo"]},{title: "Notable formulations",items:[Resurrection Aromatique Hand Wash
//     "Resurrection Aromatique Hand Balm",
//     "Resurrection Aromatique Hand Balm in aluminium tube", 
//     Resurrection Aromatique Hand Balm",
//     Citrus, woody, herbaceous"
  
//     Post-Poo Drops
//     Geranium Leaf Body Cleanser]}]

// }]

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item); // Toggle content
  };

  return (
    <div>
      <Topnav />
      <nav className="navbar mt-5">
        <div className="navbar-header ">
          <div className="search-container px-4 h-10">
            
            <input type="text" placeholder="Hey, What you looking for?" className='search-input w-full outline-none' />
            <CiSearch size="20" />
          </div>
          <div className='leading-7'>
          <h1 className="logo">Aesop</h1>
          <p className='text-[15px] mt-3'>THUSTED ONLINE SHOPPING</p>

          </div>
          
          <div className="user-actions ">
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
              <span >Wishlist</span>
            </Link>
          </div>
        </div>

        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            // <li key={index} className={(item===activeItem)?"isClicked":"navbar-item"}>
            //   <button onClick={() => handleItemClick(item)}>{item}</button>
            // </li>

            <li key={index} className="navbar-item">
              <Link to={}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Section
      {activeItem && (
        <div className="content-section">
          <h2>{activeItem}</h2>
          <p>
            This is some content related to <strong>{activeItem}</strong>. You
            can add more detailed information or elements here.
          </p>
          <button onClick={() => setActiveItem(null)}>Close</button>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
