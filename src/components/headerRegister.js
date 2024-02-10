import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const HeaderRegister=()=>{
    return (<div className="header-section">
            <div className="main-heading-section">
                <h4 ><NavLink className="back-button-Reg" to='/AppLoginRegisterPage/login'><ArrowBackIosIcon /></NavLink></h4>
                <h3>BDG GAME</h3>
                <div className="flag-section">
                    <img alt="logo" src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo=" />
                    <h4>EN</h4>
                </div>
            </div>
            <div className="login-content">
                <h4>Register</h4>
                <p>Please Register with your phone or email.</p>
            </div>
    </div>)
}