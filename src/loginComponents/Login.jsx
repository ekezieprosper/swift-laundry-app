import React, { useState } from 'react'
import "./Login.css"
import Swal from 'sweetalert2'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosEyeOff, IoMdArrowRoundBack, IoMdEye } from 'react-icons/io'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  const handleEmail = (e) => {
    const yourEmail = e.target.value
    setEmail(yourEmail)
  }

  const handlePassword = (e) => {
    const yourPasword = e.target.value
    setPassword(yourPasword)
  }

  const navigate = useNavigate()

  const url = "https://swift-laundry.onrender.com/sign-in"
  const data = { email, password }
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      console.log("pass");
      const response = await axios.post(url, data);
      Swal.fire({
        title: "Login Successful",
        text: response.data?.message,
        icon: "success",
      });
      navigate("/dashboards")


    } catch (err) {
      if (err.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data?.error,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };




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
        <section className='wholebodysa'>
          <div className='registerdContainersa'>
            <div className='registerdLogoContainersa'>
              <img onClick={navigateToHome} src="./grace.png" alt="" />
              <div className='spansa'>
                <h1> Login</h1>
              </div>
            </div>
            <div className='inputContainerssa'>
              <div className='registeredInputContainer1sa'>
                <h3>Email</h3>

                <input required type="email" className='BusinessNamesa' placeholder='Enter your email' onChange={handleEmail} />
                <h3>Password</h3>
                <div className="addresssa">
                  <input required type={!show ? "password"  : "text"} placeholder='Enter your password' className='' onChange={handlePassword} />
                  <div onClick={showEyeIcon} className="eye_icon">
                    {!show ? <IoIosEyeOff /> : <IoMdEye />}
                  </div>
                </div>
              </div>

            </div>
            <div className='registeredBtnContainersa'>
              <button disabled={isLoading} type='submit' className='signUpsa'>{isLoading ? <BeatLoader color="white" /> : "Login"}</button>
              <div className='alreadyHaveAccountsa'>
                <span >Don't have an account? <Link style={{ textDecoration: "none" }} to="/signup"><b>Login</b></Link></span>
              </div>
            </div>
          </div>

        </section>
      </form>
      <div onClick={navigateBack} className="back_icon">
        <IoMdArrowRoundBack size={30} />
      </div>
      
    </div>
  )
}

export default Login
