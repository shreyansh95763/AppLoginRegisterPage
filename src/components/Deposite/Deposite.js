import { DepositAmount } from "./DepositAmount"
import { HeaderGoldenContainer } from "./HeaderContainer"
import { HeaderPayment } from "./HeaderPayment"
import { PaymentOptions } from "./PaymentOption"
import { SelectChannel } from "./SelectChannel"
export const Deposite=()=>{
    return(<>
        <HeaderPayment heading='Deposit' history="Deposit History"/>
            <HeaderGoldenContainer />
        <div className="payment-deposite-body">
            <PaymentOptions />
            <SelectChannel />
            <DepositAmount />
        </div>
    </>)
}