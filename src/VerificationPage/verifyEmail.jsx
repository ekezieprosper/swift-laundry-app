import React from "react";
import "./verifyEmail.css"
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";


const VerifyEmail = ()=>{
    const navBusiness = useNavigate()
    const navigateBusinessDashboard = () => {
        navBusiness("/registerLogin")
    }

    return(
        <>
        <div className="Verify_Email">
            <div className="Verify_EmailWrapper">
            <div className="parent">
                <div className="verified">
                <h1>You have been verified successfully</h1>
              <img src="./mark.png" alt="" className="successful" />
                </div>
                <button className="dashboardBtn" onClick={navigateBusinessDashboard}>Dashboard</button>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default VerifyEmail;