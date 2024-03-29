import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const HeaderPaymentDe=(props)=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate("..", { relative: "path" });
    }
    // const key = props.key;
    const navToDepositeHistory =()=>{
        navigate("deposite-history")
    }
   
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20}}/>
        <div></div>
        <h5>{props.heading}</h5>
        <p onClick={()=>{navToDepositeHistory()}}>{props.history}</p>
        </div>
    </>)
}