import React from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'
import { Link } from 'react-scroll'
const Footer = () => {
   
  const home = useNavigate()
  const navigateToAbout = () =>{
    home("/aboutPage")
  }
   
  const about = useNavigate()
  const navigateToHome = () =>{
    about("/")
  }


  return (
    <div className='footerBody'>
      <div className='footerLeft'>
        <div className='footerLeftWrapper'>
          <img src="./grace.png" alt="" />
          <div className='footerLocation'>
            <img src="./location.png" alt="" />
            <h5>161 Muyibi Street, Olodi-Apapa, Lagos</h5>
          </div>
          <div className='footerContact'>
            <img src="./contact.png" alt="" />
            <h5>07081101605</h5>
          </div>
          <div className='footerMessage'>
            <img src="./message.png" alt="" />
            <h5>swiftlaundry@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className='footerRight'>
        <div className='footerQuick'>
          <h3>Quick Links</h3>
          <Link 
          smooth={true}
          offset={-100}
          duration={500}
          to='home'
          className=''
          onClick={navigateToHome}>
            <p>Home</p>
          </Link>
          <p  onClick={navigateToAbout}>About</p>
          <p>Services</p>
        </div>
        <div className='footerLegal'>
          <h3>Legal Links</h3>
          <p>Terms</p>
          <p>Conditions</p>
          <p>Policy</p>
        </div>
        <div className='footerSocial'>
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
