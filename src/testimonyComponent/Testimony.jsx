import React, { useEffect, useState } from 'react';
import './Testimony.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    slideesToShow: 2,
    slideToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };


  return (
    <div className='testimonyMainDiv'>
      <header className='testimoniesHeader'>
        <p>What people say</p>
        <h1>Testimonies</h1>
      </header>
      <div className="slider">
        {/* <Slider {...settings}> */}
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
          <div className='divbg'>
            <p>"As a busy professional, finding time for laundry was always a challenge. Thanks to this amazing laundry service, I no longer have to worry about it. The quick turnaround time, combined with the exceptional cleaning quality, has made my life so much easier. I can't imagine going back to doing my own laundry now!"</p>
          </div>
        </div>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
          <div className='divbg'>
            <p>"As a busy professional, finding time for laundry was always a challenge. Thanks to this amazing laundry service, I no longer have to worry about it. The quick turnaround time, combined with the exceptional cleaning quality, has made my life so much easier. I can't imagine going back to doing my own laundry now!"</p>
          </div>
        </div>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
          <p> <div className='divbg'>
            <p>"I was skeptical about outsourcing my laundry, but after trying this service, I'm a believer! The convenience of having my clothes picked up and delivered right to my doorstep is a game-changer. Not to mention, the quality of the cleaning is outstanding. My clothes have never looked better. I'm a customer for life!"</p>
          </div></p>
        </div>

        {/* </Slider> */}
      </div>

    </div>
  );
};

export default Testimony;
