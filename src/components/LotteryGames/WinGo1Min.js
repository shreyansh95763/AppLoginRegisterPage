import {BetHistoryBtn } from "./GameTimingSection/BetHistoryBtn"
import { CreateBet } from "./GameTimingSection/CreateBetsection/CreateBet"
import { GameListWingo } from "./GameTimingSection/GameTimerList"
import { HeaderWinGo } from "./HeaderWinGo"
import { UpSliderWingo } from "./UpSliderWingo"

export const WinGo=()=>{
    return(<>
        <div className="wingo-body-section">
            <HeaderWinGo />
            <UpSliderWingo />
            <GameListWingo />
            <CreateBet />
            <BetHistoryBtn />
        </div>
    </>)
}