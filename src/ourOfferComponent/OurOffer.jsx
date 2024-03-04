import React from 'react'
import "./OurOffer.css"

const OurOffer = () => {
  return (
    <div id='offer' className='ourOfferMainDiv'>
      <img src="./noto_bubbles.png" alt=""  className='bubbles'/>
      <img src="./noto_bubbles (1).png" alt=""  className='bubble'/>
       <section className='offerTopDiv'>
        <p>What We Offer</p>
        <samp>Our Offer</samp>
      </section>
      <section className='offerBottomDiv'>

        <article className='saveTimeDiv'>
          <div className='saveTimeLogo'>
            <img src="./logo1.png" alt="" />
          </div>
          <h2>Save Time And Money</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>

        <article className='payOnlineDiv'>
          <div className='payOnlineLogo'>
          <img src="./logo2.png" alt="" />
          </div>
          <h2>Pay Online In Seconds</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>

        <article className='satisfactionDiv'>
          <div className='satisfactionLogo'>
          <img src="./logo3.png" alt="" />
          </div>
          <h2>Satisfaction Guarantee</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>
      </section>
    </div>
  )
}

export default OurOffer
