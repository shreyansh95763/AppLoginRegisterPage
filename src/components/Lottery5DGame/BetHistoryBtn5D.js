import { useState } from "react"
import { BetHistory5D } from "./BetHistory5DLottery.js/BetHistory"
import { Chart5D } from "./BetHistory5DLottery.js/Chart/chart"
import { HistoryNotFound5D } from "./BetHistory5DLottery.js/HistoryNotFound"

export const BetHistoryBtn5D=()=>{
    const [getPage, setPage] = useState('btn1')
    const [buttonStyle,setButtonStyle] = useState({
        btn1 :{background:"linear-gradient(rgb(250,229,159),rgb(196,147,63))",color:" #8f5206",fontSize:"1rem",fontWeight:700}
    })
    const handleClick=(btn)=>{
        setPage(btn);
        setButtonStyle({
        [btn]:{background: "linear-gradient(rgb(250,229,159),rgb(196,147,63))",color:" #8f5206",fontSize:"1rem",fontWeight:700}
        })
    }
    return(<>
        <div className="history-btn-container">
            <div className="history-btn" style={buttonStyle.btn1} onClick={()=>{handleClick('btn1')}} > Game history</div>
            <div className="history-btn" style={buttonStyle.btn2} onClick={()=>{handleClick('btn2')}} >Chart</div>
            <div className="history-btn" style={buttonStyle.btn3} onClick={()=>{handleClick('btn3')}} >My history</div>
        </div>
        {getPage==='btn1' && <BetHistory5D />}
        {getPage==='btn2' && <Chart5D />}
        {getPage==='btn3' && <HistoryNotFound5D />}

    </>)
}