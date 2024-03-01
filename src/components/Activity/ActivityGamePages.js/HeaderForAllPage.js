import { NavLink, Navigate } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const HeaderGamePage=({headingProps})=>{
    function backButton() {
        <Navigate to="/AppLoginRegisterPage/Activity" />
    }
    return(<>
        <div className="header-section" style={{ background: " #404040",position:"sticky",top:"0",zIndex:11}}>
            <div className="main-heading-section">
                <h4 onClick={backButton} style={{ cursor: "pointer" }}><NavLink className="btn-links" style={{ color: "white" }} to="/AppLoginRegisterPage/Activity"><ArrowBackIosIcon /></NavLink></h4>
                <div style={{fontSize:"1.4rem"}}>{headingProps}</div>
                <div className="flag-section">
                   
                </div>
            </div> 
        </div>
    </>)
}