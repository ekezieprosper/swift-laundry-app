import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import "./verify.css"



const Verifys = () => {
    const nav = useNavigate()
    const navigateDashboard = () => {
        nav("/login")
    }


    return(
        <>
        <div className="verify_Container">
            <div className="verify_ContainerWrapper">
                <div className="parent">
                <div className="verified">
                <h1>You have been verified successfully</h1>
              <img src="./mark.png" alt="" className="successful" />
                </div>
                <button className="dashboardBtn" onClick={navigateDashboard}>Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Verifys;