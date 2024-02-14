import { BetFooter } from "./GameTimingSection/BetFooterSection"
import { BetHistory } from "./GameTimingSection/BetHistory/BetHistory"
import {BetHistoryBtn } from "./GameTimingSection/BetHistoryBtn"
import { CreateBet } from "./GameTimingSection/CreateBetsection/CreateBet"
import { GameListWingo } from "./GameTimingSection/GameList"
import { TimmerSection } from "./GameTimingSection/TimerSection"
import { HeaderWinGo } from "./HeaderWinGo"
import { UpSliderWingo } from "./UpSliderWingo"

export const WinGo=()=>{
    return(<>
        <HeaderWinGo />
        <div className="wingo-body-section">
            <UpSliderWingo />
            <GameListWingo />
            <CreateBet />
            <BetHistoryBtn />
            
            
        </div>
    </>)
}