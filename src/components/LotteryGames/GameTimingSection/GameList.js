import { useState } from "react"
import { TimmerSection } from "./TimerSection";

export const GameListWingo=()=>{
    const [timerDuration,setTimerDuration] = useState(60);
    const [getIndex , setIndex] = useState('list0');
    const [buttonStyle,setButtonStyle] = useState({
        divlist0:{ background: "linear-gradient(180deg,#EAB456 0%,#FFECAC 100%)",color:"#3f270a"},
        textlist0:{color:"#8f5206",fontFamily: "bahnschrift"},
    })
    const handleEvents=(newPage,duration)=>{
        setIndex(newPage);
        setTimerDuration(duration);
        setButtonStyle({
            [`div${newPage}`]:{background: "linear-gradient(180deg,#EAB456 0%,#FFECAC 100%)",color:"#3f270a",fontFamily: "bahnschrift" , color:"#8f5206"},
            [`text${newPage}`]:{color:"#8f5206",fontFamily: "bahnschrift"},
        })
    }
    return(<>
        <div className="Game-timing-container">
            <div className="Game-list" style={buttonStyle.divlist0} onClick={()=>{handleEvents('list0',60)}}>
                <img alt="clock-logo" src={getIndex==='list0'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textlist0}>Win Go <br /> 1 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divlist1} onClick={()=>{handleEvents('list1',180)}}>
                <img alt="clock-logo" src={getIndex==='list1'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textlist1}>Win Go <br /> 3 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divlist2} onClick={()=>{handleEvents('list2',300)}}>
                <img alt="clock-logo" src={getIndex==='list2'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textlist2}>Win Go <br /> 5 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divlist3} onClick={()=>{handleEvents('list3',300)}}>
                <img alt="clock-logo" src={getIndex==='list3'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textlist3}>Win Go <br /> 10 Min</div>
            </div>
           
        </div>
        
        <TimmerSection duration={timerDuration} />
    </>)
}