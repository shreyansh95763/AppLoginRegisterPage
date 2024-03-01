import { NavLink } from "react-router-dom"
import { HeaderGamePage } from "./HeaderForAllPage"

export const ActivityDetaile6=()=>{
    return(<>
        <HeaderGamePage headingProps="Activity Details" />
         <img className="activity-detail-up-pic" alt="Activit-detail pic " src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20231125141026uw34.png" />
        <h4 style={{color:"white", textAlign:"center",fontWeight:"660",fontSize:'1.1rem',margin:0,marginTop:".4rem"}}>Mystrey Random Bonus</h4>
        <br></br>
        <div className="activity-detaile6"style={{textAlign:"start"}} >
            <div className="activity-telegram-link" ><span style={{fontSize:".8rem"}}>❤️ Click To Follow Telegram Channel: </span><span style={{fontSize:".8rem"}}><NavLink to="https://t.me/bigdaddygame">https://t.me/bigdaddygame</NavLink></span></div>
        </div>
        <br></br>
        <div className="activity-detaile6">
            <div>
            <span style={{fontWeight:"550"}}>❤️Mystery Bonus 1:</span>
            <span>Mystery bonus Rs 1-9999999 will be distributed randomly from time to time. The more active you are on the platform, the higher your engagement rate will be.</span></div>
        </div>
        <br></br><br></br>
        <div className="activity-detaile6">
            <div><span>❤️Mystery Bonus 2:</span>
            <span>Recharge In BDG Game , Randomly Draw A Single Recharge Amount To Give A Multiple Bonus Of 1-10! ! The Time Is Not Fixed. The More Deposit Times, The Higher Chances To Get.</span></div>
        </div>
        <br></br>
    </>)
}