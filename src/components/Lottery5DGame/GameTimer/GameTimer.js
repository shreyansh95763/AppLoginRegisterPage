import { useState } from "react"
import { TimmerBetSection } from "./TimerBetSection";
import { LotteryResult } from "../LotteryResult";
import { BetClaim } from "./BetClaim";
// import  SlotMachine  from "../SlotMachine";
import SlotMachines from "../SlotMachine";

export const GameList5DLottery=()=>{
    const [timerDuration,setTimerDuration] = useState(60);
    const [timeLefts,setTimeLefts] = useState(60);
    const [getIndex , setIndex] = useState('min1');
    const [buttonStyle,setButtonStyle] = useState({
        divmin1:{ background: "linear-gradient(180deg,#EAB456 0%,#FFECAC 100%)",color:"#3f270a"},
        textmin1:{color:"#8f5206",fontFamily: "bahnschrift"},
    })
    
    const handleEvents=(newPage,duration)=>{
        setIndex(newPage)
        setTimerDuration(duration);
        const now = new Date();
        const Livemin = now.getMinutes();
        const Livesec = now.getSeconds();
        console.log("Sec main",Livesec,"MIN",Livemin);

        function printLiveTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            console.log(`Current time: ${hours}:${minutes}:${seconds}`);
          }
          // Call the function every second to print the live time
          setInterval(printLiveTime, 1000);
          
        if(newPage==="min1"){
          setTimeLefts(60-Livesec);
          // setActiveTimers("min1")
        }
        else if(newPage==="min3"){

            setTimeLefts(180-((Livemin*60)+Livesec)%180);
            console.log("Remainder find",((Livemin*60)+Livesec)%180)
        }
        else if(newPage === "min5"){
            setTimeLefts(300-((Livemin*60)+Livesec)%300);
        }
        else{
            setTimeLefts(600-((Livemin*60)+Livesec)%600);
        }
        setButtonStyle({
            [`div${newPage}`]:{background: "linear-gradient(180deg,#EAB456 0%,#FFECAC 100%)",fontFamily: "bahnschrift" ,color:"#8f5206"},
            [`text${newPage}`]:{color:"#8f5206",fontFamily: "bahnschrift"},
        })
    }
    return(<>
        <div className="Game-timing-container">
            <div className="Game-list" style={buttonStyle.divmin1} onClick={()=>{handleEvents('min1',60)}}>
                <img alt="clock-logo" src={getIndex==='min1'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" : "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textmin1}>Win Go <br /> 1 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divmin3} onClick={()=>{handleEvents('min3',180)}}>
                <img alt="clock-logo" src={getIndex==='min3'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textmin3}>Win Go <br /> 3 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divmin5} onClick={()=>{handleEvents('min5',300)}}>
                <img alt="clock-logo" src={getIndex==='min5'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textmin5}>Win Go <br /> 5 Min</div>
            </div>
            <div className="Game-list" style={buttonStyle.divmin10} onClick={()=>{handleEvents('min10',600)}}>
                <img alt="clock-logo" src={getIndex==='min10'? "https://www.bdggame.in/assets/png/time_a-a8df1213.png" :  "https://www.bdggame.in/assets/png/time-5d4e96a3.png"} />
                <div style={buttonStyle.textmin10}>Win Go <br /> 10 Min</div>
            </div>
        </div>
        <LotteryResult />
        <div className="betting-section-5d">
        <TimmerBetSection duration={timerDuration} timeLefts={timeLefts}/>
        <SlotMachines />
        <BetClaim />
        </div>
    </>)
}