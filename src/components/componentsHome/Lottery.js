import { NavLink} from "react-router-dom";
import { LotteryLists1} from "./lotteryLists/lotteryList1";
import { useState } from "react";
import { LotteryLists2 } from "./lotteryLists/lotteryList2";
import { LotteryLists3 } from "./lotteryLists/lotteryList3";
import { LotteryLists4 } from "./lotteryLists/lotteryList4";
import { LotteryLists5 } from "./lotteryLists/lotteryList5";

export const Lottery=()=>{
    const [getIndex , setIndex] = useState(0);

    const handleEvents=(newPage)=>{
        setIndex(newPage);
    }
    
    return(<>
        <h5 className="nav-heading" >Lottery</h5>
        <div className="lottery-section">
            <div className="lottery-section-navigator">
                <div className="lottery-nav-btn" onClick={()=>{handleEvents(0)}}>
                    <NavLink className="lottery-navlink" to="#">All</NavLink>
                </div>
                <div className="lottery-nav-btn" onClick={()=>{handleEvents(1)}} >
                    <NavLink className="lottery-navlink" to="#">Win Go</NavLink>
                </div>
                <div className="lottery-nav-btn" onClick={()=>{handleEvents(2)}} >
                    <NavLink className="lottery-navlink" to="#">K3</NavLink>
                </div>
                <div className="lottery-nav-btn" onClick={()=>{handleEvents(3)}} >
                    <NavLink className="lottery-navlink" to="#">5D</NavLink>
                </div>
                <div className="lottery-nav-btn" onClick={()=>{handleEvents(4)}} >
                    <NavLink className="lottery-navlink" to="#">Trx Win</NavLink>
                </div>
            </div>
            <div>
            {getIndex===0 &&  <LotteryLists1 />}
            {getIndex===1 &&  <LotteryLists2 />}
            {getIndex===2 &&  <LotteryLists3 />}
            {getIndex===3 &&  <LotteryLists4 />}
            {getIndex===4 &&  <LotteryLists5 />}
            </div>

        </div>
    </>
    );
}