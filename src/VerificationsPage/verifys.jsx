import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"


const Click = () => {

    const navs = useNavigate()
    const navigateDashboards = () => {
        navs("/registerLogin")
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
                <button className="dashBoardApi" onClick={navigateDashboards}> Dashboard </button>
                </div>
            </div>
        </div>
        </>
    )
}


export default Click;