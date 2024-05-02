import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const HistoryHeader=(props)=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate(-1);
    }
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20,cursor:"pointer"}}/>
        <h5 style={{fontWeight:570}}>{props.name}</h5>
        <div></div>
        </div>
    </>)
}