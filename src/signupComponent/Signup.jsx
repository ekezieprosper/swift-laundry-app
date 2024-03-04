import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import { BeatLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { IoIosEyeOff, IoMdArrowRoundBack, IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'


const Signup = () => {

  const [firstName, setFistName] = useState(" ")
  const [lastName, setLastName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [phoneNumber, setPhoneNumber] = useState(" ")
  const [password, setPassword] = useState(" ")
  const [confirmPassword, setConfirmPassword] = useState(" ")
  const [isLoading, setIsLoading] = useState(false)


  const handleFirstName = (e) => {
    const newFirstName = e.target.value
    setFistName(newFirstName)
    //  console.log(newFirstName)
  }


  const handleLastName = (e) => {
    const newLastName = e.target.value
    setLastName(newLastName)
    //  console.log(newLastName)
  }

  const handleEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    //  console.log(newEmail)
  }

  const handlePhoneNumber = (e) => {
    const newPhoneNumber = e.target.value
    setPhoneNumber(newPhoneNumber)
    //  console.log(newPhoneNumber)
  }

  const handlePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    //  console.log(newPassword)
  }

  const handleConfirmPassword = (e) => {
    const newConfirm = e.target.value
    setConfirmPassword(newConfirm)
    //  console.log(newConfirm)
  }

  const url = "https://swift-laundry.onrender.com/register-User"
  const data = { firstName: firstName, lastName: lastName, email: email, password: password, confirmPassword: confirmPassword, phoneNumber: phoneNumber }
  console.log(url, data);
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios.post(url, data)
      Swal.fire({
        title: "Please Check Your Email for verification",
        text: response.data?.message,
        icon: "success",
        timer: 5000
      });
    } catch (err) {
      console.log("errr", err);
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
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }
  const navigateToHome = () => {
    navigate("/")
  }

  const [show, setShow] = useState(false)
  const showEyeIcon = () => {
    setShow(!show)
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className='wholebodya'>
          <div className='registerdContainera'>
            <div className='registerdLogoContainera'>
              <img onClick={navigateToHome} src="./grace.png" alt="" />
              <div className='spana'>
                <h1>Sign up</h1>
              </div>
            </div>
            <div className='inputContainersa'>
              <div className='registeredInputContainer1a'>
                <h3>First Name</h3>
                <input  required type="text" className='BusinessNamea' placeholder='Enter your first name' onChange={handleFirstName} />
                <h3>Last Name</h3>
                <input required type="text" placeholder='Enter your last name' className='addressa' onChange={handleLastName} />
              </div>
              <div className='registeredInputContainer2a'>
                <div className='emailContainera'>
                  <h3>Email</h3>
                  <input required type="email" className='emailInputa' placeholder='Enter your email' onChange={handleEmail} />
                  <h3>Password</h3>
                  <div className="passwordInputa">

                    <input required type={!show ? "password" : "text"} className='' placeholder='Enter your password' onChange={handlePassword} />
                    <div onClick={showEyeIcon} className="eye_icon">
                      {!show ? <IoIosEyeOff /> : <IoMdEye />}
                    </div>
                  </div>
                </div>
                <div className='phoneNumberContainera'>
                  <h3>Phone Number</h3>
                  <input required type="text" className='phoneNumberInputa' placeholder='Enter your phone number' onChange={handlePhoneNumber} />
                  <h3>Confirm Password</h3>
                  <input required type="password" className='confirmPasswordInputa' placeholder='Confirm your password' onChange={handleConfirmPassword} />
                </div>
                <div></div>
              </div>
            </div>
            <button disabled={isLoading} className='signUpa' type='submit'>{isLoading ?
              <BeatLoader color="white" /> : "SignUp"}</button>
            <div className='alreadyHaveAccounta'>
              <Link style={{ textDecoration: "none" }} to="/login">
                <span>Already have an account?<b>Login</b></span>
              </Link>
            </div>
          </div>

        </div>
      </form  >

      <div onClick={navigateBack} className="back_icon">
        <IoMdArrowRoundBack size={30} />
      </div>
    </div>
  )
}

export default Signup
