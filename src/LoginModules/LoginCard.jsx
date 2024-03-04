import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'
import './LoginModules.css'
import { MdCancel } from 'react-icons/md'


const LoginModules = ({ onClick }) => {

    const naviga = useNavigate()
    const navigateShop = () => {
        naviga("/Login")
    }


    const nav = useNavigate()
    const navigateBusiness = () => {
        nav("/registerLogin")
    }



    // const navigateToHome = () => {
    //     naviga("/")
    // }


    return (
        <>
            <div className='loginModulesContainer'>
                <div className='loginModulesContainerWrapper'>
                    <div className="login_cardWrapper">
                        <header className="login_cardHeaders">
                            <p>Login As ?</p>
                        </header>
                        <div className="login_cardContainer">
                            <div className="login_cardLeft">
                                <h1>Customer  </h1>
                                <button className="login_cardBtn" onClick={navigateShop} >Login As User</button>
                            </div>
                            <div className="login_cardRight">
                                <h1> Business </h1>
                                <button className="login_cardBtn" onClick={navigateBusiness}>Login As Business Owner</button>
                            </div>
                            <div onClick={onClick} className="cancel">
                                <MdCancel size={20} fill='rgb(64, 176, 241)' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginModules;