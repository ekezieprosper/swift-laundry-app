// import React, { useState } from 'react'
import { useState } from "react"
import "./RegisterLogin.css"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import { BeatLoader } from "react-spinners"
import { Link } from 'react-router-dom'
import axios from "axios"
import { IoMdArrowRoundBack } from "react-icons/io"


const RegisterLogin = () => {
  const [businessEmail, setBusinessEmail] = useState("")
  const [password, setpasswordBusiness] = useState("")
  const [isLoading, setIsLoading] = useState(false)




  const handleBusinessEmail = (e) => {
    const newBusinessEmail = e.target.value
    setBusinessEmail(newBusinessEmail)
    console.log(newBusinessEmail)
  }


  const handlepasswordBusiness = (e) => {
    const newpasswordBusiness = e.target.value
    setpasswordBusiness(newpasswordBusiness)
    console.log(newpasswordBusiness)
  }


  const url = "https://swift-laundry.vercel.app/login-shop"
  const data = { email: businessEmail, password: password, }
  const navigate = useNavigate()



  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios.post(url, data)
      Swal.fire({
        text: response.data?.message,
        icon: "success"
      });
      navigate("/businessDashboard")

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

  const navigatei = useNavigate()


  const navigateToHome = () => {
    navigatei("/")
  }





  return (
    <>
      <form onSubmit={handleSubmitForm}>
      <section className='wholebodys'>
        <div className='registerdContainers'>
          <div className='registerdLogoContainers'>
            <img src="./grace.png" alt=""  className="swiftLaundryLogo"/>
            <div className='spans'>
              <h1>Business Login</h1>
            </div>
          </div>
          <div className='inputContainerss'>
            <div className='registeredInputContainer1s'>
              <h3>Business Email</h3>
              <input required type="text" className='BusinessNames' placeholder='Enter your business email' onChange={handleBusinessEmail} />
              <h3>Password</h3>
              <input required type="text" placeholder='Enter your password' className='addresss' onChange={handlepasswordBusiness} />
            </div>

          </div>
          <button disabled={isLoading} className='signUpa' type='submit'>{isLoading ?
              <BeatLoader color="white" /> : "SignUp"}</button>
            <div className='alreadyHaveAccounta'>
              {/* <Link style={{ textDecoration: "none" }} to="/login"> */}
                <span>Already have an account?<b>Login</b></span>
              {/* </Link> */}
          </div>
        </div>

      </section>
      </form>
      <div onClick={navigateToHome} className="back_icon">
        <IoMdArrowRoundBack size={30} />
      </div>
    </>
  )
}

export default RegisterLogin
