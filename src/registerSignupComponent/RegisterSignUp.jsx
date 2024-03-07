
import React, { useState } from 'react';
import "./RegisterSignUp.css"
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import { Link } from 'react-scroll';
import { IoIosEyeOff, IoMdArrowRoundBack, IoMdEye } from 'react-icons/io';

const RegisterSignUp = () => {
  const [businessName, setBusinessName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setBusinessEmail] = useState("")
  const [phoneNumber, setBusinessPhoneNumber] = useState("")
  const [password, setBusinessPassword] = useState("")
  const [confirmPassword, setBusinessConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)



  const handleBusinessName = (e) => {
    const newBusinessName = e.target.value
    setBusinessName(newBusinessName)
    console.log(newBusinessName)
  }


  const handleAddress = (e) => {
    const newBusinessAddress = e.target.value
    setAddress(newBusinessAddress)
    console.log(newBusinessAddress)
  }


  const handleEmail = (e) => {
    const newBusinessEmail = e.target.value
    setBusinessEmail(newBusinessEmail)
    console.log(newBusinessEmail)
  }


  const handleBusinessPhoneNumber = (e) => {
    const newBusinessEmail = e.target.value
    setBusinessPhoneNumber(newBusinessEmail)
    console.log(newBusinessEmail)
  }


  const handleBusinessPassword = (e) => {
    const newBusinessPassword = e.target.value
    setBusinessPassword(newBusinessPassword)
    console.log(newBusinessPassword)
  }


  const handleBusinessConfirmPassword = (e) => {
    const newBusinessConfirmPassword = e.target.value
    setBusinessConfirmPassword(newBusinessConfirmPassword)
    console.log(newBusinessConfirmPassword)
  }



  const url = "https://swift-laundry.onrender.com/register-shop"
  const data = { businessName: businessName, address: address, email: email, password: password, confirmPassword: confirmPassword, phoneNumber: phoneNumber }
  const navigate = useNavigate()

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios.post(url, data)
      console.log(response.data?.data);
      Swal.fire({
        title: "Congratulations! You've Successfully Registered with Swift Laundry",
        text: response.data?.message,
        icon: "success"
      });
      navigate("/businessDashboard")
      localStorage.setItem('admindata', JSON.stringify(response.data?.data))

    } catch (err) {
      if (err.response) {
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data?.error,
        });
      }
    } finally {
      setIsLoading(false)
    }
  }




  const navigateBack = () => {
    navigate(-1)
  }



  const [show, setShow] = useState(false)
  const showEyeIcon = () => {
    setShow(!show)
  }
  const [shows, setShows] = useState(false)
  const showEyeIcons = () => {
    setShows(!shows)
  }



  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className='wholebody'>
          <div className='registerdContainer'>
            <div className='registerdLogoContainer'>
              <img src="./grace.png" alt=""  className='swiftLaundryLogo'/>
              <div className='span'>
                <h1>Registered Business</h1>
              </div>
            </div>
            <div className='inputContainers'>
              <div className='registeredInputContainer1'>
                <h3>Business Name</h3>
                <input required type="text" className='BusinessName' placeholder='Enter your business name' onChange={handleBusinessName} />
                <h3>Business Address</h3>
                <input type="text" placeholder='Enter your business address' className='address' onChange={handleAddress} />
              </div>
              <div className='registeredInputContainer2'>
                <div className='emailContainer'>
                  <h3>Business Email</h3>
                  <input required type="email" className='emailInput' placeholder='Enter your business email' onChange={handleEmail} />
                  <h3>Password</h3>
                  <div className="addressy">
                  <input required type={!show ? "password"  : "text"} placeholder='Enter your password' className='passwordInput' onChange={handleBusinessPassword} />
                  <div onClick={showEyeIcon} className="eye_icon">
                    {!show ? <IoIosEyeOff /> : <IoMdEye  />}
                  </div>
                </div>
                </div>
                <div className='phoneNumberContainer'>
                  <h3>Phone Number</h3>
                  <input required type="text" className='phoneNumberInput' placeholder='Enter your phone number' onChange={handleBusinessPhoneNumber} />
                  <h3>Confirm Password</h3>
                  <div className="addressy">
                  <input required type={!show ? "password"  : "text"} placeholder='Enter your password' className='passwordInput' onChange={handleBusinessConfirmPassword} />
                  <div onClick={showEyeIcons} className="eye_icon">
                    {!shows ? <IoIosEyeOff /> : <IoMdEye  />}
                  </div>
                </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className='registeredBtnContainer'>
              <button disabled={isLoading} className='signUp' type='submit'>{isLoading ?
                <BeatLoader color="white" /> : "signUp"} </button>
              <div className='alreadyHaveAccount'>
              <span >Don't have an account? <Link style={{ textDecoration: "none" }} to="/login"><b>Sign Up</b></Link></span>
              </div>
            </div>
          </div>

        </div>
      </form>
      <div onClick={navigateBack} className="back_icon">
        <IoMdArrowRoundBack size={30} />
      </div>
    </>

  )
}

export default RegisterSignUp