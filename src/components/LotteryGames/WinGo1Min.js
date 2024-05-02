import { useState } from "react"
import {BetHistoryBtn } from "./GameTimingSection/BetHistoryBtn"
import { CreateBet } from "./GameTimingSection/CreateBetsection/CreateBet"
import { GameListWingo } from "./GameTimingSection/GameTimerList"
import { HeaderWinGo } from "./HeaderWinGo"
import { UpSliderWingo } from "./UpSliderWingo"

export const WinGo=()=>{
    const [gameId,setGameId] = useState(1)
    return(<>
        <div className="wingo-body-section">
            <HeaderWinGo />
            <UpSliderWingo />
            <GameListWingo setGameId={setGameId} />
            <CreateBet gameId={gameId} />
            <BetHistoryBtn />
        </div>
    </>)
}