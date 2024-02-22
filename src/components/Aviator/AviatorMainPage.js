import { WinningInfo } from "../componentsHome/winningInformation/WinningInfo";
import { Aviator } from "./Aviator";
import { AviatorBar } from "./AviatorBar";
import { AviatorNavbar } from "./AviatorNavBar";
import { ResultBar } from "./ResultBar";

export const MainAviator = () => {
    return (<>
        <div style={{position:"fixed",background:"black",height:"100%",width:"100%",left:"0%"}}>
            <AviatorNavbar />
            <AviatorBar />
            <div style={{
                position: "fixed",
                left: "0",
                top:"19.5%",
                height: "95%",
                width: "29%",
                padding: "1rem",
                background: "rgb(26, 25, 25)",
            }}><WinningInfo /></div>
            <div className="result-bar-container"><ResultBar /></div>
            <div className="aviator-div"><Aviator /></div>
        </div>

    </>);
}