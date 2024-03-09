
import { HeaderWinGo } from "../LotteryGames/HeaderWinGo"
import { UpSliderWingo } from "../LotteryGames/UpSliderWingo"
import { BetHistoryBtn5D } from "./BetHistoryBtn5D"
import { GameList5DLottery } from "./GameTimer/GameTimer"

export const Main5DLottery=()=>{
    return(<>
        <div className="wingo-body-section">
            <HeaderWinGo />
            <UpSliderWingo />
            <GameList5DLottery />
            {/* <CreateBet /> */}
            <BetHistoryBtn5D />
        </div>
    </>)
}