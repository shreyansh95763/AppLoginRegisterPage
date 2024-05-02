import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate,  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export const Gift=()=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const backButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate(-1);
        // navigate("..", { relative: "path" });
    }

  const [data,setData] = useState('');
  const handleChange=(e)=>{
    setData(e.target.value);
  }

    const handleSubmit=async(e)=>{
        // e.preventDefault();
        var id=localStorage.getItem("token");
        try {
            const response = await axios.get(
              `https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/gift_cart_apply?userid=${id}&code=${data}`,
             
              {
                headers: { 'Content-Type': 'multipart/form-data',}
              });
            // Handle successful login response
            console.log(response.data);
          //   props.history.push('/dashboard');
            if (response.data.status==='200') {
              toast.success(response.data.msg);
              console.log("Response",response.data.id);
             
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
    }
    return(<>
         <div className="header-section care-header">
            <div className="care-header-section">
                <h4 onClick={()=>{backButton()}} style={{cursor:"pointer"}}><NavLink className="btn-links" style={{color:"white"}} to="/AppLoginRegisterPage/"><ArrowBackIosIcon /></NavLink></h4>
                <h5 style={{marginLeft:"-2.5rem"}}>Gift</h5>
                <div></div>
            </div>
            <div className="girl-image" style={{height:"10rem"}}>
                <img alt='girl pic' style={{height:"10rem"}} src='https://bdggame.in/assets/png/gift-0e49be1a.png' />
            </div>
        </div>
        <div className='card m-2' style={{ backgroundColor: "#404040" }}>
             <div className='card-body row '>
                <div className="col-12 mb-3 text-secondary fw-medium">
                        Hi <br></br>
                        We have gift for you
                </div> 
                <div className="col-12 text-light fs-6 fw-light mb-3">
                    Please enter the gift code below 
                </div>
                <input 
                        className='gift-input col-11 text-light'
                        type="number"
                        value={data}
                        onChange={handleChange}
                        placeholder="Enter the gift code "
                        autoComplete="off" />

               <div className="deposite-amount-button" onClick={()=>{handleSubmit()}} >Recieve</div>

             </div>
             <ToastContainer />
        </div>
    </>
    );
}