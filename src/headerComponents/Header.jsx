import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll"
import LoginModules from '../LoginModules/LoginCard'
import BusinessP from '../modulesComponent/Test'


const Header = () => {


  const [showHome, setShowHome] = useState(true)
  const [showShop, setShop] = useState(false)
  const [showOffer, setOffer] = useState(false)
  const [showPlans, setPlans] = useState(false)
  const [showAbout, setAbout] = useState(false)
  const [showContact, setContact] = useState(false)
  const handleShowHome = () => {
    setShowHome(true)
    setOffer(false)
    setPlans(false)
    setAbout(false)
    setContact(false)
    setShop(false)
  }
  const handleShowShop = () => {
    setShowHome(false)
    setShop(true)
    setOffer(false)
    setPlans(false)
    setAbout(false)
    setContact(false)
  }
  const handleShowOffer = () => {
    setShowHome(false)
    setOffer(true)
    setShop(false)
    setPlans(false)
    setAbout(false)
    setContact(false)
  }
  const handleShowPlans = () => {
    setShowHome(false)
    setOffer(false)
    setPlans(true)
    setAbout(false)
    setShop(false)
    setContact(false)
  }
  const handleShowAbout = () => {
    setShowHome(false)
    setShop(false)
    setOffer(false)
    setPlans(false)
    setAbout(true)
    setContact(false)
  }
  const handleShowContact = () => {
    setShowHome(false)
    setOffer(false)
    setPlans(false)
    setAbout(false)
    setShop(false)
    setContact(true)
  }

  const [show, setShow] = useState(false)
  const [shows, setShows] = useState(false)

  const showLoginModules = () => {
    setShow(!show)
    setShows(false)
  }

  const showLoginModule = () => {
    setShows(!shows)
    setShow(false)
  }


  const removeLoginModule = () => {
    setShows(false)
    setShow(false)
  }

  return (
    <div className='HeaderMainDiv'>
      <section className='logoDiv'>
        <img src="./grace.png" alt="" className='swiftLaundryLogo' />
      </section>

      <section className='writeUpDiv'>
        <ul>
          <Link
            onClick={handleShowHome}
            smooth={true}
            offset={-100}
            duration={500}
            to='home'
            className={showHome ? "active" : "inactive"}
          >
            <NavLink className={showHome ? "active" : "inactive"} to="/">
              Home
            </NavLink>
          </Link>
          <NavLink
            onClick={handleShowShop}
            to="/shopPage"
            className={showShop ? "active" : "inactive"}>
            Shops
          </NavLink>
          <Link
            onClick={handleShowOffer}

            smooth={true}
            offset={-100}
            duration={500}
            className={showOffer ? "active" : "inactive"}
            to='offer'>
            <NavLink
              to=""
              className={showOffer ? "active" : "inactive"}
            >
              Offers
            </NavLink>
          </Link>
          <Link
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleShowPlans}
            className={showPlans ? "active" : "inactive"}
            to='plans'
          >
            <NavLink
              className={showPlans ? "active" : "inactive"}

              to="plans">
              Plans
            </NavLink>
          </Link>
          <NavLink
            onClick={handleShowAbout}

            to="/aboutPage"
            className={showAbout ? "active" : "inactive"}>About</NavLink>
          <NavLink
            onClick={handleShowContact}

            to="contactPage/"
            className={showContact ? "active" : "inactive"}>Contact</NavLink>
        </ul>
      </section>

      <section className='btnDiv'>

        <div onClick={showLoginModules} className='main_loginButton'>
          Login
        </div>
        <div onClick={showLoginModule} className='signUpButton'>
          Sign up
        </div>
      </section>

      <section className='burgerIconImage'>
        <img src="./burger.png" alt="" />
      </section>

      <>
        {show ? <LoginModules onClick={removeLoginModule} /> : null}
        {shows ? <BusinessP onClick={removeLoginModule} /> : null}
      </>
    </div>
  )
}

export default Header
