import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./DashboardLayout.css"
import { Link } from 'react-router-dom'
import ProfileModal from '../components/ProfileModal'
import { RiDashboardFill } from "react-icons/ri";
import { MdLocalLaundryService } from 'react-icons/md'
import { SiWebmoney } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { IoMdNotificationsOutline } from 'react-icons/io'
import axios from 'axios'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const DashboardLayout = () => {
  const navigate = useNavigate()
  const [showProfile, setShowProfile] = useState(false)
  const [userInfo, setUSerInfo] = useState({})
  const token = localStorage.getItem('userToken')
  // })
  const getUser = async () => {
    const res = await axios.get(' https://swift-laundry.onrender.com/get-user', {

      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    )
    // console.log(userInfo)
 setUSerInfo(res.data.data)
  }
//  const userInfo = res.data.data
  useEffect(() => {
    getUser()
  }, [])
  const logOut = ()=>{
    localStorage.removeItem("userToken")
    navigate("/login")

  }
  return (
    <div className='mainDashboardDiv'>
      <article className='leftMainDiv'>
        <section className='logosDiv'>
          <img src="./grace.png" alt="" />

        </section>

        <section className='writeUpMiddleDiv'>
          <div className='holdWriteUp'>
            <NavLink to={"/dashboards"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>

              <samp><RiDashboardFill style={{ width: "25px", height: "25px" }} /></samp>
              <p>Dashboard</p>
            </NavLink>

            <NavLink to={"/order"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>

              <samp><MdLocalLaundryService style={{ width: "25px", height: "25px" }} /></samp>
              <p>Do Laundry</p>
            </NavLink>

            <NavLink to={"/subscribe"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>

              <samp><SiWebmoney style={{ width: "25px", height: "25px" }} /></samp>
              <p>Subscribe</p>
            </NavLink>
          </div>
        </section>

        <section className='logOutDiv' onClick={logOut}>

          <TbLogout style={{ width: "25px", height: "22px" }} />
          <p>Log out</p>
        </section>
      </article>

      <article className='rightMainDiv'>

        <div className='topMainDiv'>
          <section className='nameDiv'>Welcome, {userInfo.firstName}</section>
          <section className='iconImageDiv'>
            <article className='ICN1'>
              <IoMdNotificationsOutline style={{ width: "40px", height: "30px" }} />
            </article>
            <article className='ICN2' onClick={() => setShowProfile(!showProfile)}><img src="./profile.png" alt="" /></article>
          </section>
        </div>

        <div className='bottomMainDiv'>
          <Outlet />
        </div>
      </article>


      {
        showProfile ? <ProfileModal /> : ""
      }

    </div>
  )
}

export default DashboardLayout
