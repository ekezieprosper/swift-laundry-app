import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./DashboardLayout.css"
import { Link } from 'react-router-dom'
import ProfileModal from '../components/ProfileModal'
import { RiDashboardFill } from "react-icons/ri";
import { MdLocalLaundryService } from 'react-icons/md'
import { SiWebmoney } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { IoMdNotificationsOutline } from 'react-icons/io'

const DashboardLayout = () => {
  const [showProfile, setShowProfile] = useState(false)


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

        <section className='logOutDiv'>

          <TbLogout style={{ width: "25px", height: "22px" }} />
          <p>Log out</p>
        </section>
      </article>

      <article className='rightMainDiv'>

        <div className='topMainDiv'>
          <section className='nameDiv'>Welcome, David</section>
          <section className='iconImageDiv'>
            <article className='ICN1'>
              <IoMdNotificationsOutline style={{ width: "40px", height: "30px" }}/>
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
