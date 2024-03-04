import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import "./Test.css"
import { MdCancel } from "react-icons/md"




const BusinessP = ({ onClick }) => {

  const navigate = useNavigate()
  const navigateToShop = () => {
    navigate("/signup")
  }
  const navigat = useNavigate()
  const navigateToBusiness = () => {
    navigat("/registerSignup")
  }




  // const navigateToHome = () => {
  //   navigate("/")
  // }


  return (
    <>
      <div className="businessPage">
        <div className="login_card">
          <div className="login_cardWrapper">
            <header className="login_cardHeader">
              <p>Sign Up As ?</p>
            </header>
            <div className="login_cardContainer">
              <div className="login_cardLeft">
                <h1>Customer  </h1>
                <button className="login_cardBtn" onClick={navigateToShop}>Sign Up As User</button>
              </div>
              <div className="login_cardRight">
                <h1> Business </h1>
                <button className="login_cardBtn" onClick={navigateToBusiness}>Sign Up Business Owner</button>
              </div>
            </div>

            <div onClick={onClick} className="cancel">
              <MdCancel size={20} fill='rgb(64, 176, 241)' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BusinessP