import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
export const HeaderPayment=(props)=>{
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        return <Navigate to="/AppLoginRegisterPage/WinGo" />;
    }
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20}}/>
        <div></div>
        <h5>{props.heading}</h5>
        <p>{props.history}</p>
        </div>
    </>)
}