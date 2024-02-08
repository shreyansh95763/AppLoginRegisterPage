import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Checkbox } from '@mui/material';
import { HeaderLogIn } from "./headerLogIn";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { LoginByPhone } from "./loginByPhone";
import { LoginByEmail } from "./loginByEmail";

export const Login = () => {
    const [data, setData] = useState({
        "email": "",
        "phone": "",
        "password": ""
    })

    const [showPassword, setShowPassword] = useState(true);
    const [loginMethod, setLoginMethod] = useState(true);
    const visibility = () => {
        setShowPassword(!showPassword);
    }
    const loginToP = () => {
        setLoginMethod(true);
    }
    const loginToE = () => {
        setLoginMethod(false);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const submitlogin=(e)=>{
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if(storedData){
            const {email:storedemail,password:storedpassword,phone:storedphone}=storedData;
            const {email, phone, password} = data;
            
            console.log(email);
            if(email){
                    if(email===storedemail && password===storedpassword){
                        toast.success("Success Notification !");
                    }
                    else{
                        
                        toast.error("Email or Password not matched !");
                    }
            }
            else{
                if(phone===storedphone && password===storedpassword){
                    toast.success("Success Notification !");
                }
                else{
                    toast.error("Phone or Password not matched !");
                }
            }
        }
        else{
            toast.error("Invalid credencial or You are Not User", {
                position: "top-right",
              });
        }
    }
    return (<>
        <HeaderLogIn />
        <div className='body-section'>
            <div className="grid grid-two-cols">
                <div className={`icon-section ${loginMethod ? 'clicked' : ''}`} onClick={loginToP}>
                    <div><PhoneIphoneIcon className='icons' style={{ fontSize: 30,width:"5rem" }} /></div>
                    <h3>Login with phone</h3>
                </div>
                <div className={`icon-section ${!loginMethod ? 'clicked' : ''}`} onClick={loginToE}>
                    <div><MailIcon style={{ fontSize: 30 }} /><PersonIcon style={{ fontSize: 30 }} /></div>
                    <h3>Email/Account</h3>
                </div>
            </div>
            <form>
                <div className='input-section'>
                    {loginMethod ?
                        <LoginByPhone phone={data.phone} handleInput={handleChange} />
                        : <LoginByEmail email={data.email} handleInput={handleChange} />}
                </div>

                <div className='input-section '>
                    <div className='inputName-section display-flex'><LockIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>password</h3></div>
                    <div className="display-flex" >
                        <input
                            type={showPassword ? 'password' : 'text'}
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            id="passwordInput"
                            placeholder='Please input your email'
                            autoComplete="off"
                            required
                        />
                        <div className="hide-button" onClick={visibility}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</div>
                    </div>
                </div>
                <div className='display-flex'>
                    <Checkbox style={{borderRadius:"50%"}}/><p>Reminder password</p>
                </div>
                <button onClick={submitlogin}className="logIn-button btn" type='submit'>Log In</button>
                <ToastContainer autoClose={3000} theme="colored" closeOnClick draggable/>
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