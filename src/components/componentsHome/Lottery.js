import { NavLink} from "react-router-dom";
import { LotteryLists1} from "./lotteryLists/lotteryList1";
import { useState } from "react";
import { LotteryLists2 } from "./lotteryLists/lotteryList2";
import { LotteryLists3 } from "./lotteryLists/lotteryList3";
import { LotteryLists4 } from "./lotteryLists/lotteryList4";
import { LotteryLists5 } from "./lotteryLists/lotteryList5";

export const Lottery=()=>{
    const [getIndex , setIndex] = useState('list0');
    const [buttonStyle,setButtonStyle] = useState({
        list0:{ backgroundColor: "#D2A753",color:"#3f270a"}
    })

    const handleEvents=(newPage)=>{
        setIndex(newPage);
        setButtonStyle({
            [newPage]:{backgroundColor: "#D2A753",color:"#3f270a",fontFamily: "bahnschrift"}
        })
    }
    
    return(<>
        <h5 className="nav-heading">Lottery</h5>
        <div className="lottery-section">
            <div className="lottery-section-navigator">
                <div className="lottery-nav-btn" style={buttonStyle.list0} onClick={()=>{handleEvents('list0')}}>
                    <div className="lottery-navlink" style={buttonStyle.list0} >All</div>
                </div>
                <div className="lottery-nav-btn" style={buttonStyle.list1} onClick={()=>{handleEvents('list1')}} >
                    <div className="lottery-navlink"  style={buttonStyle.list1} >Win Go</div>
                </div>
                <div className="lottery-nav-btn" style={buttonStyle.list2} onClick={()=>{handleEvents('list2')}} >
                    <div className="lottery-navlink"  style={buttonStyle.list2} >K3</div>
                </div>
                <div className="lottery-nav-btn" style={buttonStyle.list3} onClick={()=>{handleEvents('list3')}} >
                    <div className="lottery-navlink"  style={buttonStyle.list3} >5D</div>
                </div>
                <div className="lottery-nav-btn" style={buttonStyle.list4} onClick={()=>{handleEvents('list4')}} >
                    <div className="lottery-navlink"  style={buttonStyle.list4} >Trx Win</div>
                </div>
            </div>
            <div>
            {getIndex==='list0' &&  <LotteryLists1 />}
            {getIndex==='list1' &&  <LotteryLists2 />}
            {getIndex==='list2' &&  <LotteryLists3 />}
            {getIndex==='list3' &&  <LotteryLists4 />}
            {getIndex==='list4' &&  <LotteryLists5 />}
            </div>

        </div>
    </>
    );
}