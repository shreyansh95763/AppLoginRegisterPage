import { useState } from "react";

export const MenuBox1 =(props)=>{
    
    return(
<>
    <div className="gridpic-container grid grid-three-cols">
        <div className="bgColors threegrid-btn"  onClick={()=>props.handleEvents("lottery")}>
            <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619315n2k.png" />
            <h4>Lottery</h4>
        </div>
        <div className="bgColors threegrid-btn" onClick={()=>props.handleEvents("original")}>
        <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061847fevc.png" />
        <h4>Original</h4>
        </div>
        <div className="bgColors threegrid-btn"  onClick={()=>props.handleEvents("slots")}>
        <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061937gbid.png" />
        <h4>Slots</h4>
        </div>
    </div>

</>
    );
}