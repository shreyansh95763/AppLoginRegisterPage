import { NavLink, Navigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RestoreIcon from '@mui/icons-material/Restore';
export const AwardHeader = () => {
    function backButton() {
        <Navigate to="/AppLoginRegisterPage/Activity" />
    }
    return (<>
        <div className="header-section" style={{ background: " #404040" }}>
            <div className="main-heading-section">
                <h4 onClick={backButton} style={{ cursor: "pointer" }}><NavLink className="btn-links" style={{ color: "white" }} to="/AppLoginRegisterPage/Activity"><ArrowBackIosIcon /></NavLink></h4>
                <div></div>
                <div className="flag-section">
                    <RestoreIcon style={{fontSize:30,marginTop:"-1rem"}}/>
                    <p style={{marginRight:".1rem",fontSize:".8rem"}}>Collection record</p>
                </div>
            </div>
            <div className="award-heading-container" >
                <img alt="award-images" src="https://bdggame.in/assets/png/present-8160e040.png" />
                <div className="award-content" style={{marginLeft:".2rem"}}><h5>Activity Award</h5>
                    <div>Complete weekly/daily tasks to receive rich rewards.</div>
                    <div>Weekly rewards can not be accumulated to the next week, and daily rewards can not be acc- umulated to the next day.</div>
                </div>
            </div>
        </div>
    </>)
}