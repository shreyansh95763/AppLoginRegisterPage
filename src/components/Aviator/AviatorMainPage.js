import { useEffect, useState } from "react";
import { WinningInfo } from "../componentsHome/winningInformation/WinningInfo";
import { Aviator } from "./Aviator";
import { AviatorBar } from "./AviatorBar";
import { AviatorNavbar } from "./AviatorNavBar";
import FlewAway from "./FlewAway";
import Progressbar from "./Progressbar";
import { ResultBar } from "./ResultBar";
import "./Aviator.css"
import AviatorButton from "./AviatorButton";

export const MainAviator = () => {
    const [status, setStatus] = useState(0);

    useEffect(() => {
        const cycleStatus = () => {
            switch (status) {
                case 0:
                    setTimeout(() => setStatus(1), 2000); // Set status to 1 after 2 seconds
                    break;
                case 1:
                    setTimeout(() => setStatus(2), 9000); // Set status to 2 after 5 seconds
                    break;
                case 2:
                    setTimeout(() => setStatus(0), 2000); // Set status to 0 after 2 seconds
                    break;
                default:
                    break;
            }
        };

        const interval = setInterval(cycleStatus, 13000); // Repeat every 9 seconds (2 + 5 + 2)

        // Clean up the interval when the component unmounts or when status changes
        return () => clearInterval(interval);
    }, [status]);

 
    return (<>
        <div  style={{ position: "fixed", background: "black", height: "100%", width: "100%", left: "0%" }}>
            <AviatorNavbar />
            <AviatorBar />
            <div className="row d-flex">
            <div className="col-4" style={{
                position: "fixed",
                left: "0",
                top: "19.5%",
                height: "95%",
                width: "29%",
                padding: "1rem",
                background: "rgb(26, 25, 25)",
            }}><WinningInfo /></div>
            <div className="cols-8">
            <div className="result-bar-container"><ResultBar /></div>
            <div className="aviator-div">
                <div className="canvas-main-div mx-auto">
                    {status === 0 && (<>
                        <Progressbar betTime="5.67" />
                        {/* <Progressbar betTime={aviatorData.betTime} /> */}
                    </>)}
                    <div>
                        {status === 1 && (
                            <div>
                                <Aviator aviatorData={5.88} />
                                {/* <Aviator aviatorData={aviatorData} /> */}
                                <h1 className="result-bet">1.56</h1>
                                {/* <h1 className="result-bet">{aviatorData.timer}x</h1> */}
                            </div>
                        )}
                    </div>
                    {status === 2 && <FlewAway result="4.55" />}
            {/* {status === 2 && <FlewAway result={aviatorData.timer} />} */}
                    </div> 
                <AviatorButton style={{marginLeft:"30%"}} />
                </div>
                </div>
            </div>
            </div>

        </>);
}