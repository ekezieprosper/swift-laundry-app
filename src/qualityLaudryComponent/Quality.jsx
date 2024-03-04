import React from 'react'
import "./Quality.css"
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const Quality = () => {
  const navisgatey = useNavigate()
  const navigateToSignUps = () =>{
    navisgatey("/signup")
  }


  return (
    <div className='qualityMainDiv'>
      <div className='qualityContainer'>
        <div className='needQuality'>
          <h1>Need a Quality Laundry Service with Fast</h1>
          <h1>Pickup & Delivery.</h1>
        </div>
        <div className='getStarted'>
          <button className='getStartedBtn' onClick={navigateToSignUps}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Quality
