import React, { useEffect, useState } from 'react';
import './Testimony.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Testimony = () => {
        const settings = {
        dots:true,
        infinite:true,
        slideesToShow:2,
        slideToScroll:1,
        autoplay:true,
        speed:3000,
        autoplaySpeed:5000,
        cssEase:"linear"
      };
      

  return (
    <div className='testimonyMainDiv'>
      <header className='testimoniesHeader'>
        <p>What people say</p>
        <h1>Testimonies</h1>
      </header>
      <div  className="slider">
      {/* <Slider {...settings}> */}
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
        </div>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
        </div>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
        </div>
       
      {/* </Slider> */}
      </div>
  
    </div>
  );
};

export default Testimony;
