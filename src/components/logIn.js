import {NavLink} from "react-router-dom";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Checkbox } from '@mui/material';
import {HeaderLogIn} from "./headerLogIn";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { LoginByPhone }  from "./loginByPhone";
import { LoginByEmail } from "./loginByEmail";

export const Login = () => {
    const [ showPassword ,setShowPassword] = useState(true);
    const [loginMethod, setLoginMethod] = useState(true);
    const visibility=()=>{
      setShowPassword(!showPassword);
    }
    const loginToP=()=>{
        setLoginMethod(true);
    }
    const loginToE=()=>{
        setLoginMethod(false);
    }
    return (<>
         <HeaderLogIn />
        <div className='body-section'>
            <div className="grid grid-two-cols">
                <div className={`icon-section ${loginMethod ?'clicked' : ''}`} onClick={loginToP}>
                    <div><PhoneIphoneIcon className='icons' style={{ fontSize: 40 }} /></div>
                    <h3>Login with phone</h3>
                </div>
                <div className={`icon-section ${!loginMethod ?'clicked' : ''}`} onClick={loginToE}>
                    <div><MailIcon style={{ fontSize: 40 }} /><PersonIcon style={{ fontSize: 40 }} /></div>
                    <h3>Email/Account</h3>
                </div>
            </div>
            <form>
                <div className='input-section'>
                        {loginMethod ? <LoginByPhone /> :<LoginByEmail />}
                </div>
                
                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>password</h3></div>
                    <div className="display-flex" ><input   type={showPassword ?  'password' : 'text'} id="passwordInput" placeholder='Please input your email' />
                    <div className="hide-button" onClick={visibility}>{showPassword ? <VisibilityOffIcon  />:<VisibilityIcon />}</div>
                    </div>
                </div>
                <div className='display-flex'>
                    <Checkbox /><p>Reminder password</p>
                </div>
                <button className="logIn-button btn" type='submit'>Log In</button>
                <button className="reginster-button btn" type='button'><NavLink className="btn-link" to="/Register">Register</NavLink> </button>
            </form>
            <div className="grid grid-two-cols forget-section">
                <div className="forget-icons icon-section">
                    <LockIcon style={{ color: "rgb(210, 184, 37)", fontSize: 70 }} />
                    <h4>Forget password</h4>
                </div>
                <div className="forget-icons icon-section">
                    <SupportAgentIcon style={{ color: "rgb(210, 184, 37)", fontSize: 70 }} />
                    <h4>Customer service</h4>
                </div>
            </div>
        </div>
        </>
    );
}