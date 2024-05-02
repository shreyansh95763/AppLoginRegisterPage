import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { NavLink, useNavigate,  } from 'react-router-dom';
export const HeaderCare = () => {
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);
    const backButton=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        // window.history.back();
        navigate(-1 );
    }

    return (<>
        <div className="header-section care-header">
            <div className="care-header-section">
                <h4 onClick={()=>{backButton()}} style={{cursor:"pointer"}}><NavLink className="btn-links" style={{color:"white"}} to="/AppLoginRegisterPage/"><ArrowBackIosIcon /></NavLink></h4>
                <h5>Customer Service</h5>
                <div></div>
            </div>
            <div className="girl-image">
                <img alt='girl pic' src='	https://www.bdggame.in/assets/png/customerBg-1f590d5d.png' />
            </div>
        </div>
        
    </>)
}