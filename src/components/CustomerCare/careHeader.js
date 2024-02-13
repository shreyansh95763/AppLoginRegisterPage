import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, Navigate } from 'react-router-dom';
export const HeaderCare = () => {
    function backButton(){
        <Navigate to="/AppLoginRegisterPage/" />
    }
    return (<>
        <div className="header-section care-header">
            <div className="care-header-section">
                <h4 onClick={backButton} style={{cursor:"pointer"}}><NavLink className="btn-links" style={{color:"white"}} to="/AppLoginRegisterPage/"><ArrowBackIosIcon /></NavLink></h4>
                <h5>Customer Service</h5>
                <div></div>
            </div>
            <div className="girl-image">
                <img alt='girl pic' src='	https://www.bdggame.in/assets/png/customerBg-1f590d5d.png' />
            </div>
        </div>
        
    </>)
}