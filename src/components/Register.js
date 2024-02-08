import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Checkbox } from '@mui/material';
import { HeaderRegister } from "./headerRegister"

export const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [data, setData] = useState({
        "username": "",
        "phone": "",
        "email":"",
        "password": "",
        "confirmPassword":""
    })
    const visibility = () => {
        setShowPassword(!showPassword);
    }
    const visibilityConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    const submitRegister =(e)=>{
        e.preventDefault();
        const{phone,email,password,confirmPassword,username } = data;
        if(email && phone && password && confirmPassword && username){
        if(password !== confirmPassword){
            // alert("Password Not Matched !");
            toast.error("Password Not Matched !")
        }
        else{
        localStorage.setItem('userData',JSON.stringify(data));
        toast.success("Resistration Successful !");
       setRedirectToLogin(true);
        }
    }
    else{
        toast.error("Please Enter All Properties")
    }
      }
      if (redirectToLogin) {
        return <Navigate to="/login" />;
      }
    return (<>

        <HeaderRegister />
        <div className='body-section'>
            <div className="grid" style={{ color: "#C4933F" }}>
                <div className='icon-section'>
                    <div><PhoneIphoneIcon className='icons' style={{ fontSize: 30 }} /></div>
                    <h3>Register with phone</h3>
                </div>
            </div>
            <form>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><PersonIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>User name</h3></div>
                    <input
                        type='text'
                        name="username"
                        value={data.username}
                        onChange={handleInput}
                        placeholder='Please Enter Username'
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><PhoneIphoneIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Phone number</h3></div>
                    <input
                        type='phone'
                        name="phone"
                        value={data.phone}
                        onChange={handleInput}
                        placeholder='Please input your phone'
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Email Addresss</h3></div>
                    <input
                        type='email'
                        name="email"
                        value={data.email}
                        onChange={handleInput}
                        placeholder='Please input your email'
                        required />
                </div>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Set password</h3></div>
                    <div className="display-flex" >
                        <input
                            type={showPassword ? 'password' : 'text'}
                            name="password"
                            id="passwordInput"
                            value={data.password}
                            onChange={handleInput}
                            placeholder='Please Enter Set Password'
                            required
                        />
                        <div className="hide-button" onClick={visibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</div> </div>
                </div>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Confirm password</h3></div>
                    <div className="display-flex" >
                        <input
                            type={showPasswordConfirm ? 'password' : 'text'}
                            id="passwordInput"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleInput}
                            placeholder='Please Enter Confirm Password'
                            autoComplete='off'
                            required
                        />
                        <div className="hide-button" onClick={visibilityConfirm}>{showPasswordConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}</div> </div>
                </div>
                {/* <div className='input-section '>
                    <div className='inputName-section display-flex'><PersonIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Invite code</h3></div>
                    <input 
                    type='number' 
                    name
                    placeholder='Please Enter your invite code' />
                </div> */}

                <div className='display-flex'>
                    <Checkbox className='checkbox' /><p>Reminder password</p>
                </div>
                <button onClick={submitRegister} className="logIn-button btn" type='submit' style={{ backgroundImage: "linear-gradient(180deg,#FAE59F 0%,#C4933F 100%)", color: "#545805" }}>Register</button>
                <ToastContainer autoClose={3000} theme="colored" closeOnClick draggable/>
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