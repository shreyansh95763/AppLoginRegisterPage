import { NavLink, Navigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const HeaderJackpot=()=>{
    function backButton() {
        <Navigate to="/AppLoginRegisterPage/Activity" />
    }
    return (<>
        <div className="header-section" style={{background: "linear-gradient(300deg, rgb(143, 82, 6) 0%, rgb(217, 172, 79) 100%)" ,padding:"0"}}>
            <div className="main-heading-section" style={{background: "linear-gradient(300deg, rgb(143, 82, 6) 0%, rgb(217, 172, 79) 100%)",position:"sticky",top:"0",width:"100%"}}>
                <h4 onClick={backButton} style={{ cursor: "pointer" }}><NavLink className="btn-links" style={{ color: "white" }} to="/AppLoginRegisterPage/Activity"><ArrowBackIosIcon /></NavLink></h4>
                <h5>Super Jackpot</h5>
                <div className="flag-section">
                   </div>
            </div>
            <div className="award-heading-container" style={{padding:".5rem"}} >
                <div className="award-content" style={{marginLeft:".2rem"}}><h5 style={{fontSize:"1.7rem",margin:"1.2rem 0",fontWeight:"600"}}>Super Jackpot</h5>
                    <div style={{margin:"1.3rem 0"}}>When you get the Super Jackpot in 【Slots】Can get 1 additional bonus</div>
                    <div >The reward is valid for 30 day, and you will not be able to claim it after it expires!</div>
                </div>
                <img style={{width:"8rem",height:"11rem"}}alt="award-images" src="https://bdggame.in/assets/png/icon-0b143b8c.png" />
            </div>
        </div>
    </>)

}