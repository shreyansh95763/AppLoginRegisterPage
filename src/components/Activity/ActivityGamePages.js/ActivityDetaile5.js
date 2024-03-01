import { ActivityDetailBody } from "./ActivityDetailBody"
import { HeaderGamePage } from "./HeaderForAllPage";
import SecondPic from 'C:/Users/SHREYANSH/Desktop/Projects/bdgGame/bdggame/src/Assets/download.jpg'

export const ActivityDetaile5=()=>{
    return(<>
        <HeaderGamePage headingProps="Activity Details" />
        <ActivityDetailBody
        imgs="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20240110083230eoxs.png" 
        imgs2={SecondPic}
        heading="BDG Game RESCUE BONUS" />
        <div className="activity-detail5-div">
            <h5>BDG Game Rescue Bonus：</h5>
            <p>Recharge Amount 100+ ，Unlimited 5% Rescue Bonus.</p>
            <br></br>
            <h5>Bonus Conditions:</h5>
            <br></br>
            <p>1.Minimum Recharge On The Day 100rs Above</p>
            <p>2.The Rescue Bonus Is Calculated According To The First Recharge Amount Of The Day, And There Is No Upper Limit</p>
            <p>3.Losing Players Can Apply For A 5% Rescue Bonus With Teacher Or Customer Service On The Next Day</p>
            <p>4.Calculation Method : Based On The First Recharge Amount Of The Day And The 2nd Day Account Remaining Balance To Calculate The Rate Of Rescue Bonus . ( Consider Forfeit After Due Date)</p>
            <p>5.BDG Game Has The Right To Freeze The Member Account If It Detects Any Illegal Betting Or Illegal Activities</p>
            <p>6.The Final Interpretation Of This Event Belongs To BDG Game.</p>
            <br></br>
        </div>
    </>)
}