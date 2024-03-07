import { DepositAmount } from "./DepositAmount"
import { DepositHistory } from "./DepositeHistory"
import { HeaderGoldenContainer } from "./HeaderContainer"
import { HeaderPaymentDe } from "./HeaderPayment"
import { PaymentOptions } from "./PaymentOption"
import { RechargeInfo } from "./RechargeInfo"
import { SelectChannel } from "./SelectChannel"
export const Deposite=()=>{
    return(<>
        <HeaderPaymentDe heading='Deposit' history="Deposit History" key='1' />
            <HeaderGoldenContainer name="Balance" color="#8f5206" />
        <div className="payment-deposite-body">
            <PaymentOptions />
            <SelectChannel />
            <DepositAmount />
            <RechargeInfo />
            <DepositHistory />
        </div>
    </>)
}