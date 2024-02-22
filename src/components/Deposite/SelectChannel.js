import { useState } from "react";
import Channels from "./SelectChannel.json";
export const SelectChannel=()=>{
    const [gridStyle,setGridStyle] = useState({
        grid1:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)",color:"#8f5206"}
    })
    const handleClick=(grids)=>{
        setGridStyle({
            [grids]:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)",color:"#8f5206"}
        })
    }
    return(<>
        <div className="channel-container">
            <h4><img alt="select channel icon " src="https://bdggame.in/assets/png/quickpay2-f8a11ddc.png" /> Select Channel</h4>
            <div className="channels-divs">
            {Channels.lists.map((val)=>(
            <div style={gridStyle[val.id]} onClick={()=>{handleClick(`${val.id}`)}} className="channel-div">
                <h5>{val.name}</h5>
                <h5>Balance::{val.amount}-50K</h5>
            </div>
            ))}
            </div>
        </div>
    </>)
}