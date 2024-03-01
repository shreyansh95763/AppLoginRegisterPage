import { useState } from "react"

export const VIPhistory=()=>{
    const [buttonStyle,setButtonStyle] = useState({
        "item1":{background: "linear-gradient(125deg, #C4933F 12.38%, #FAE59F 87.13%)",color: "#8f5206",borderRadius: "0.16rem"}
    })
    const switchButton=(item)=>{
        setButtonStyle({
            [item]:{background: "linear-gradient(125deg, #C4933F 12.38%, #FAE59F 87.13%)",color: "#8f5206",borderRadius: "0.16rem"}
        })
    }
    return(<>
        <div className="vip-switch-history">
            <div style={buttonStyle.item1} onClick={()=>{switchButton("item1")}}>History</div>
            <div style={buttonStyle.item2}  onClick={()=>{switchButton("item2")}}>Rules</div>
        </div>
        <div className="vip-container-no-data">
            <img alt="imgajk" src="https://bdggame.in/assets/png/empty-ea102850.png" />
            <p>No Data</p>
        </div>
        <div style={{margin:"0",padding:'.22rem'}}>
        <div className="weekly-tasks-five-div logout" style={{color:"#d9ac4f",border:"1px solid #d9ac4f",margin:"1.4rem auto",background:"transparent"}}> View All</div>
</div>
    </>)
}