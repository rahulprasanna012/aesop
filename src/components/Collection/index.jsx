import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import gifts from '../../assets/collection/gifts.jpg';
import skin from '../../assets/collection/skin.jpg';
import head from '../../assets/collection/hand.png';
import home from '../../assets/collection/home.jpg';
import fragrance from '../../assets/collection/fragrance.jpg';
import hair from '../../assets/collection/hair.jpg';

const collectionItems = [
  {
    id: uuidv4(),
    name: "Gifts Collection",
    imageUrl: gifts,
  },
  {
    id: uuidv4(),
    name: "Skin Care",
    imageUrl: skin,
  },
  {
    id: uuidv4(),
    name: "Hand and Body",
    imageUrl: head,
  },
  {
    id: uuidv4(),
    name: "Home Collection",
    imageUrl: home,
  },
  {
    id: uuidv4(),
    name: "Hair",
    imageUrl: hair,
  },
  {
    id: uuidv4(),
    name: "Fragrance",
    imageUrl: fragrance,
  },
];

const Collection = () => {
  return (
    <div className="text-center py-10">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">SHOP OUR COLLECTION</h1>
        <p className="mt-3 text-gray-600">Our Delicious, Limited-Edition Collection</p>
        <button className="border-2 border-gray-500 p-2 px-9 font-semibold mt-5 rounded-md hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      <div className="mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-10 lg:mx-32">
          {collectionItems.map((item) => (
            <li key={item.id} className="relative group">
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-52 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <button className="mt-4 px-6 py-2 rounded-md hover:underline text-sm sm:text-base">
                  Shop Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collection;
