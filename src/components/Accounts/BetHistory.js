import { DepositeHistoryList } from "../LotteryGames/Deposite/DepositeHistory/DepositeHistoryList"
import { HistoryHeader } from "../LotteryGames/Deposite/DepositeHistory/HistoryHeader"
import { NoDataDeposite } from "../LotteryGames/Deposite/DepositeHistory/NoDataDeposite"


export const BetHistory = () => {
    return (<>
        <HistoryHeader name="Bet History" />
        <div style={{padding:".8rem"}}>
            <DepositeHistoryList />
            <NoDataDeposite />
        </div>
    </>)
}