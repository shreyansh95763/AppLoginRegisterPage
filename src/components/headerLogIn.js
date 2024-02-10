import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, Navigate } from 'react-router-dom';
export const HeaderLogIn = () => {
    function backButton(){
        <Navigate to="/AppLoginRegisterPage/" />
    }
    return (
        <div className="header-section">
            <div className="main-heading-section">
                <h4 onClick={backButton} style={{cursor:"pointer"}}><NavLink className="btn-links" style={{color:"white"}} to="/AppLoginRegisterPage/"><ArrowBackIosIcon /></NavLink></h4>
                <h3>BDG GAME</h3>
                <div className="flag-section">
                    <img alt="logo" src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo=" />
                    <h4>EN</h4>
                </div>
            </div>
            <div className="login-content">
                <h4>Log In</h4>
                <p>Please log in with your phone number or email.</p>
                <p>If you forget your password, please contact customer service</p>
            </div>
        </div>)
}