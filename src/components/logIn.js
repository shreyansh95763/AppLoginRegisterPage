import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { HeaderLogIn } from "./headerLogIn";
import { LoginByPhone } from "./loginByPhone";
import { LoginByEmail } from "./loginByEmail";
import { useBalance } from "../redux/store";
import axios from "axios";
import { Loading } from "./Loading/Loading";

export const Login = () => {
  const bals = useBalance();
  const [loading,setLoading] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [data, setData] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const [loginMethod, setLoginMethod] = useState(true);
  const visibility = () => {
    setShowPassword(!showPassword);
  };
  const loginToP = () => {
    setLoginMethod(true);
  };
  const loginToE = () => {
    setLoginMethod(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitlogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    {loginMethod ? (formData.append('identity', data.mobile)): (formData.append('identity', data.email))}
    formData.append('password', data.password);

    try {
      console.log(formData.identity,data.mobile);
      const response = await axios.post(
        "https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/login",
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data',}
        });
      // Handle successful login response
      console.log(response.data);
    //   props.history.push('/dashboard');
      if (response.data.status==='200') {
        toast.success(response.data.msg);
        sessionStorage.setItem('token', response.data.id);
        localStorage.setItem('token',JSON.stringify(response.data.id));
        // bals.setDeposite(response.data.id);
        bals.setDeposite((prev)=>({
          id:response.data.id
        }))
        console.log("Response",response.data.id);
        setTimeout(() => {
            setRedirectToHome(true);
          }, 1000);
      } else {
        toast.warn(response.data.msg);
      }
    } catch (error) {
      // Handle error response
      console.error("Error:", error);
      toast.error("Invalid credentials or You are not a user", {
        position: "top-right",
      });
    }
    finally {
      setLoading(false); // Set loading to false after API response is received
    }
  };
  if (redirectToHome) {
    return <Navigate to="/AppLoginRegisterPage/" />;
  }
  return (
    <>
      <HeaderLogIn />
      <div className="body-section">
      {loading && <Loading />}
        <div className="grid grid-two-cols">
          <div
            className={`icon-sections ${loginMethod ? "clicked" : ""}`}
            onClick={loginToP}
          >
            <div>
              <PhoneIphoneIcon
                className="icons"
                style={{ fontSize: 30, width: "5rem" }}
              />
            </div>
            <h3>Login with phone</h3>
          </div>
          <div
            className={`icon-sections ${!loginMethod ? "clicked" : ""}`}
            onClick={loginToE}
          >
            <div>
              <MailIcon style={{ fontSize: 30 }} />
              <PersonIcon style={{ fontSize: 30 }} />
            </div>
            <h3>Email/Account</h3>
          </div>
        </div>
        <form>
          <div className="input-section">
            {loginMethod ? (
              <LoginByPhone mobile={data.mobile} handleInput={handleChange} />
            ) : (
              <LoginByEmail emails={data.email} handleInput={handleChange} />
            )}
          </div>

          <div className="input-section ">
            <div className="inputName-section display-flex">
              <LockIcon style={{ color: "rgb(210, 184, 37)" }} />
              <h3>password</h3>
            </div>
            <div className="display-flex">
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                value={data.password}
                onChange={handleChange}
                id="passwordInput"
                placeholder="Please input your email"
                autoComplete="off"
                required
              />
              <div className="hide-button" onClick={visibility}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>
            </div>
          </div>
          <div className="display-flex">
            <Checkbox style={{ borderRadius: "50%" }} />
            <p>Reminder password</p>
          </div>
          <button
            onClick={submitlogin}
            className="btn-submit logIn-button"
            type="submit"
          >
            Log In
          </button>
          <ToastContainer
            autoClose={3000}
            theme="colored"
            closeOnClick
            draggable
          />
          <button className="reginster-button btn-submit" type="button">
            <NavLink className="btn-links" to="/AppLoginRegisterPage/Register">
              Register
            </NavLink>{" "}
          </button>
        </form>
        <div className="grid grid-two-cols forget-section">
          <div className="forget-icons icon-sections">
            <LockIcon style={{ color: "rgb(210, 184, 37)", fontSize: 70 }} />
            <h4>Forget password</h4>
          </div>
          <div className="forget-icons icon-sections">
            <SupportAgentIcon
              style={{ color: "rgb(210, 184, 37)", fontSize: 70 }}
            />
            <h4>Customer service</h4>
          </div>
        </div>
      </div>
    </>
  );
};
