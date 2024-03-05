import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import "./Verify.css"

const Verification = () => {

    

    const nav = useNavigate()
    const navigateDashboard = () => {
        nav("/login")
    }

   
    return(
        <>
        <div className="VerificatioNPage">
            <div className="VerificatioNPageWrapper">
                <div className="VerificatioNPageWrapper1">
                    <div className="textsWrapper">
                <h2>You've Been Verified Successfully. </h2>
                <h2>Go to dashboard. </h2>
                    </div>
                <button className="dashBoardApi" onClick={navigateDashboard}>Login</button>
                </div>
            </div>
        </div>
        
        </>
    )
}



export default Verification;
