import React from 'react'
import "./ContactPage.css"
import Footer from '../footerComponent/Footer'
import Quality from '../qualityLaudryComponent/Quality'


const ContactPage = () => {
  return (
    <>
    <div className='contactbody'>
      <div className='contactusdiv'>
        <h1>CONTACT US</h1>
      </div>
      <div className='contactusinput'>
        <div className='firstnameinput'>
          <span>First Name*</span>
          <input type="text" name="" id="" placeholder='First Name'/>
        </div>
        <div className='lastnameinput'> 
        <span>Last Name*</span>
        <input type="text" name="" id="" placeholder='Last Name'/>
        </div>
      </div>
      <div className='contactusmessage'>
        <span>Message*</span>
        <input type="text" name="" id="" />
      </div>
      <div className='thanksmessage'>
        <h3>Thanks! We'll respond back by email or phone.</h3>
      </div>
      <div className='phonecontactus'>
        <div className='phonecontactusholder'>
        <span>Moblie Phone Number</span>
        <input type="text" name="" id="" />
        </div>
      </div>
      <div className='emailcontactus'>
        <div className='emailcontactusholder'>
        <span>Email</span>
        <input type="text" name="" id="" />
        </div>
      </div>
      <div className='sendbutton'>
        <button>Send It</button>
      </div>
      <Quality/>
      <Footer/>
    </div>
    </>
  )
}

export default ContactPage
