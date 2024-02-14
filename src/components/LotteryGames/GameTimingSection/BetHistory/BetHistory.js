import { BetFooter } from "../BetFooterSection"
import { BetHistoryRow } from "./HistoryChartRows"

export const BetHistory=()=>{
    return(<>
        <div>
            <div className="history-heading game-history-rows">
                <div className="history-heading-name history-row-content">Period</div>
                <div className="history-heading-name history-row-content">Number</div>
                <div className="history-heading-name history-row-content">Big small</div>
                <div className="history-heading-name history-row-content">Color</div>
            </div>
            <BetHistoryRow />
        </div>
        <BetFooter />
    </>)
}