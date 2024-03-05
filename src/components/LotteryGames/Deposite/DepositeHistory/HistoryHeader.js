import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const HistoryHeader=()=>{
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleBackButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // return <Navigate to="/AppLoginRegisterPage/WinGo" />;
        // window.history.back();
        navigate("..", { relative: "path" });
    }
    return(<>
        <div className='heading-payment'>
        <ArrowBackIosIcon onClick={()=>{handleBackButton()}} style={{fontSize:20}}/>
        <h5 style={{fontWeight:570}}>Deposite History</h5>
        <div></div>
        </div>
    </>)
}