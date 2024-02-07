import { NavLink } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Checkbox } from '@mui/material';
import {HeaderRegister} from "./headerRegister"
import { useState } from 'react';

export const Register = () =>{
    const [ showPassword ,setShowPassword] = useState(true);
    const visibility=()=>{
      setShowPassword(!showPassword);
    }
    return (<>

          <HeaderRegister />
        <div className='body-section'>
            <div className="grid" style={{color:"#C4933F"}}>
                <div className='icon-section'>
                    <div><PhoneIphoneIcon className='icons' style={{ fontSize: 40 }} /></div>
                    <h3>Register with phone</h3>
                </div>
            </div>
            <form>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Phone number</h3></div>
                    <input type='phone' placeholder='Please input your email' />
                </div>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Set password</h3></div>
                    <div className="display-flex" ><input   type={showPassword ?  'password' : 'text'} id="passwordInput" placeholder='Please input your email' />
                    <div className="hide-button" onClick={visibility}>{showPassword ? <VisibilityOffIcon  />:<VisibilityIcon />}</div> </div>
                </div>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Confirm password</h3></div>
                    {/* <input type='password' placeholder='Please input your email' /> */}
                    <div className="display-flex" ><input   type={showPassword ?  'password' : 'text'} id="passwordInput" placeholder='Please input your email' />
                    <div className="hide-button" onClick={visibility}>{showPassword ? <VisibilityOffIcon  />:<VisibilityIcon />}</div> </div>
                </div>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><PersonIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Invite code</h3></div>
                    <input type='number' placeholder='Please input your email' />
                </div>
                <div className='display-flex'>
                    <Checkbox className='checkbox' /><p>Reminder password</p>
                </div>
                <button className="logIn-button btn" type='submit' style={{backgroundImage:"linear-gradient(180deg,#FAE59F 0%,#C4933F 100%)",color:"#545805"}}>Register</button>
                <button className="button-transparent btn" type='button'><NavLink className="btn-link" to="/login">Log In</NavLink> </button>
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
    )
}