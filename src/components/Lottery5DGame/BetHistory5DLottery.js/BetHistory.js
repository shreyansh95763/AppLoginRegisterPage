import { BetFooter5D } from "../BetFooterSection"
import {  BetHistoryRow5D } from "./HistoryChartRows"

export const BetHistory5D=()=>{
    return(<>
        <div>
            <div className="history-heading game-history-rows">
                <div className="history-heading-name history-row-content">Period</div>
                <div className="history-heading-name history-row-content">Result</div>
                <div className="history-heading-name history-row-content">Total</div>
                {/* <div className="history-heading-name history-row-content">Color</div> */}
            </div>
            <BetHistoryRow5D />
        </div>
        <BetFooter5D />
    </>)
}