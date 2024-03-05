import { DepositeHistoryList } from "./DepositeHistoryList"
import { HistoryHeader } from "./HistoryHeader"
import { NoDataDeposite } from "./NoDataDeposite"
import { ScrollbarPayment } from "./ScrollbarTransaction"

export const DepositeHistoryMain = () => {
    return (<>
        <HistoryHeader />
        <div style={{padding:".8rem"}}>
            <ScrollbarPayment />
            <DepositeHistoryList />
            <NoDataDeposite />
        </div>
    </>)
}