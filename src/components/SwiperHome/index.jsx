import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import timelygit from '../../assets/timelyGit.mp4';
import buddles from '../../assets/buddles.mp4';
import coorparate from '../../assets/cooperate.mp4';
import home from '../../assets/home.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperHome() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-10"
    >
      <SwiperSlide>
        <div className="swiper-slide-one">
          <div className="text-wrapper">

          <div className="text-center w-2/3">
            <h2 className='slide-head font-extrabold'>Timely gifts</h2>
            <p className='slide-para'>With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store. </p>

            <div>
                <button className='shop-button mx-9'>SHOP NOW</button>
                <button className='discover-button mx-9'>DISCOVER MORE</button>

            </div>
          </div>
            
          </div>
          
          <div className="video-wrapper">
            <video autoPlay muted loop className="responsive-video">
              <source src={timelygit} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-two">

        <div className="video-wrapper">
            <video autoPlay muted loop className="responsive-video">
              <source src={buddles} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>



          <div className="text-wrapper">

          <div className="text-center w-2/3">
            <h2 className='slide-head font-extrabold'>Four bundles for hair, hands and home</h2>
            <p className='slide-para'>The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. </p>

            <div>
                <button className='shop-button mx-9'>SHOP NOW</button>
                <button className='discover-button mx-9'>EXPLORE BUNDLES</button>

            </div>
          </div>
            
          </div>
          
         
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide-one">
          <div className="text-wrapper">

          <div className="text-center w-2/3">
            <h2 className='slide-head font-extrabold'>Corporate gifts</h2>
            <p className='slide-para'>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. </p>

            <div>
                <button className='shop-button mx-9'>SHOP NOW</button>
                <button className='discover-button mx-9'>EXPLORE MORE</button>

            </div>
          </div>
            
          </div>
          
          <div className="video-wrapper">
            <video autoPlay muted loop className="responsive-video">
              <source src={coorparate} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-two">
        <div className="video-wrapper">
            <video autoPlay muted loop className="responsive-video">
              <source src={home} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-wrapper">

          <div className="text-center w-2/3">
            <h2 className='slide-head font-extrabold'>Festive Giving</h2>
            <p className='slide-para'>Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.</p>

            <div>
                <button className='shop-button mx-9'>SHOP NOW</button>
                <button className='discover-button mx-9'>DISCOVER MORE</button>

            </div>
          </div>
            
          </div>
          
          
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
