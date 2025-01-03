import React from 'react';
import Sliping from '../Sliping';
import SwiperHome from '../SwiperHome';
import Collection from '../Collection';
import Help from '../help';
import './index.css';

const Home = () => {
  return (
    <div>
      <Sliping />
      <div className="relative home-bg">
        <SwiperHome />
        <Collection />
        <div className="fixed bottom-3 right-3 z-10"> {/* Fixed positioning */}
          <Help />
        </div>
      </div>
    </div>
  );
};

export default Home;
