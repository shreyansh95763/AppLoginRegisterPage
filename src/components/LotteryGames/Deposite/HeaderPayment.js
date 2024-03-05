import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const HeaderPayment=(props)=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate("..", { relative: "path" });
    }
    const navToHistory =()=>{
        navigate("deposite-history")
    }
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20}}/>
        <div></div>
        <h5>{props.heading}</h5>
        <p onClick={()=>{navToHistory()}}>{props.history}</p>
        </div>
    </>)
}