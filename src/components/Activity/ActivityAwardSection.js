import { useState } from "react"
import { Navigate } from "react-router-dom";

export const AwardSection=()=>{
    const [navAward,setNavAward] = useState(false);
    const [navRebate,setNavRebate] = useState(false);
    const [navJackpot,setNavJackpot] = useState(false);
    const navToAward=()=>{
        setNavAward(true);
    }
    if(navAward){
        return <Navigate to="/AppLoginRegisterPage/Activity/Award" />
    }
    const navToRebate=()=>{
        setNavRebate(true);
    }
    if(navRebate){
        return <Navigate to="/AppLoginRegisterPage/Activity/Rebate" />
    }
    const navToJackpot=()=>{
        setNavJackpot(true);
    }
    if(navJackpot){
        return <Navigate to="/AppLoginRegisterPage/Activity/Jackpot" />
    }
    return(<>
        <div className="award-section-container">
            <div className="award-section" onClick={navToAward}>
                <img alt="award-images" src="https://bdggame.in/assets/png/activityIcon1-67076a48.png" />
                <p><div>Activity</div>award</p>
            </div>
            <div className="award-section" onClick={navToRebate}>
                <img alt="betting-images" src="https://bdggame.in/assets/png/activityIcon3-778b1534.png" />
                <p><div>Betting</div>Rebate</p>
            </div>
            <div className="award-section" onClick={navToJackpot}>
                <img alt="jacpot-images" src="	https://bdggame.in/assets/png/activityIcon4-d526ab4c.png" />
                <p><div>Super</div>Jacpot</p>
            </div>
        </div>
    </>)
}