import React from 'react'
import "./HowWeWork.css"

const HowWeWork = () => {
  return (
    <div className='howWeWorkMainDiv'>
      <section className='weWorkTopDiv'>
        <p>The process</p>
        <samp>How we work</samp>
      </section>
      <section className='weWorkBottomDiv'>

        <article className='pickUpDiv'>
          <div className='pickUpLogo'>
            <img src="./Frame1.png" alt="" className='frameLogo2'/>
          </div>
          <h2>Pick Up Your Clothes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>

        <article className='washDiv'>
          <div className='washLogo'>
            <img src="./frame2.png" alt=""  className='frameLogo1'/>
          </div>
          <h2>Wash Clothes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>

        <article className='deliverDiv'>
          <div className='deliverLogo'>
            <img src="./frame3.png" alt="" className='frameLogo3'/>
          </div>
          <h2>Deliver Clothes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nulla excepturi quasi explicabo cumque.</p>
        </article>
      </section>
    </div>
  )
}

export default HowWeWork
