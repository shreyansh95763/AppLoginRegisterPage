import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const HeaderPaymentWith=(props)=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate(-1 );
        // navigate("..", { relative: "path" });
    }
    // const key = props.key;
   
    const navToWithdrawHistory =()=>{
        navigate("withdraw-history")
    }
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20}}/>
        <div></div>
        <h5>{props.heading}</h5>
        <p onClick={()=>{navToWithdrawHistory()}}>{props.history}</p>
        </div>
    </>)
}