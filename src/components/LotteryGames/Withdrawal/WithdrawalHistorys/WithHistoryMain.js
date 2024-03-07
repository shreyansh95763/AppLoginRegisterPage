import { HistoryHeader } from "../../Deposite/DepositeHistory/HistoryHeader";
import { NoDataDeposite } from "../../Deposite/DepositeHistory/NoDataDeposite";
import { ScrollbarPayment } from "../../Deposite/DepositeHistory/ScrollbarTransaction";
import { WithdrawalHistoryList } from "./WithdrawalHistoryList";

const WithHistoryMain=()=>{
    return(<>
        <HistoryHeader name="Withdrawal History" />
        <div style={{padding:".8rem"}}>
            <ScrollbarPayment />
            <WithdrawalHistoryList />
            <NoDataDeposite />
        </div>
    </>)
}

export default WithHistoryMain;