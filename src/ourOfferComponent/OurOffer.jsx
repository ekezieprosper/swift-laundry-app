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
          <p>Contrary to common belief, outsourcing your laundry needs can be a cost-effective solution. Consider the hidden costs of running your own laundry equipment, including water, electricity, detergent, and maintenance expenses. When you factor in the time saved and the convenience offered by swift laundry service, the overall cost often proves to be comparable or even more economical than doing it yourself.</p>
        </article>

        <article className='payOnlineDiv'>
          <div className='payOnlineLogo'>
          <img src="./logo2.png" alt="" />
          </div>
          <h2>Pay Online In Seconds</h2>
          <p>Embracing the option to pay online in seconds for your laundry service marks a pivotal step towards a more convenient and modern lifestyle. This seamless payment solution not only saves you time but also enhances the overall customer experience by providing security, accessibility, and automated transaction management. Make the switch to online payments today and enjoy the effortless efficiency that comes with settling your laundry service bills with just a few clicks or taps.</p>
        </article>

        <article className='satisfactionDiv'>
          <div className='satisfactionLogo'>
          <img src="./logo3.png" alt="" />
          </div>
          <h2>Satisfaction Guarantee</h2>
          <p>At Swift Laundry, our satisfaction guarantee is more than just a promise, it's a commitment to delivering the highest standard of service that exceeds your expectations. Choose us with confidence, knowing that your satisfaction is our priority. Experience the convenience, quality, and peace of mind that comes with our unparalleled laundry services, backed by a satisfaction guarantee that sets us apart in the industry.</p>
        </article>
      </section>
    </div>
  )
}

export default OurOffer
