import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist/umd/react-router-dom.development'
import "./BusinessDashboardLayout.css"
import { TbLayoutDashboard } from 'react-icons/tb'
import { CgBorderTop } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { BsUbuntu } from "react-icons/bs";

const BusinessDashboardLayout = () => {
    return (
        <div className='BusinessmainDashboardDiv'>
            <article className='BusinessleftMainDiv'>
                <section className='BusinesslogosDiv'>
                    <img src="./grace.png" alt="" />

                </section>

                <section className='BusinesswriteUpMiddleDiv'>
                    <div className='BusinessholdWriteUp'>
                        <NavLink to={"/businessDashboard"} className={({ isActive }) => isActive ? 'isactives' : 'isnotactives'}>
                            <TbLayoutDashboard style={{ width: "30px", height: "30px" }} />
                            <p>Dashboard</p>
                        </NavLink>

                        <NavLink to={"/businessOrder"} className={({ isActive }) => isActive ? 'isactives' : 'isnotactives'}>
                            <FaUsers style={{ width: "30px", height: "30px" }} />
                            <p>User</p>
                        </NavLink>

                        <NavLink to={"/businessSubscribe"} className={({ isActive }) => isActive ? 'isactives' : 'isnotactives'}>
                            <BsUbuntu style={{ width: "30px", height: "30px" }} />
                            <p>Subscribe</p>
                        </NavLink>
                    </div>
                </section>

                <section className='BusinesslogOutDiv'>
                    <img src="logout.png" alt="" />
                    <p>Log out</p>
                </section>
            </article>

            <article className='BusinessrightMainDiv'>

                <div className='BusinesstopMainDiv'>
                    <section className='BusinessnameDiv'>Welcome, Cleaneat</section>
                    <section className='BusinessiconImageDiv'>
                        <article className='BusinessICN1'></article>
                        <article className='BusinessICN2' onClick={() => setShowProfile(!showProfile)}><img src="./profile.png" alt="" /></article>
                    </section>
                </div>

                <div className='BusinessbottomMainDiv'>
                    <Outlet />
                </div>
            </article>


            {/* {
                showProfile ? <ProfileModal /> : ""
            } */}

        </div>
    )
}

export default BusinessDashboardLayout
