import { HeaderGoldenContainer } from "../Deposite/HeaderContainer"
import { HeaderPayment } from "../Deposite/HeaderPayment"
import { WithdrawPaymentOption } from "./PaymentOptionWith"

export const Withdrawal = () => {
    return (<>
        <HeaderPayment heading="Withdrawal" history="Withdrawal History" />
        <HeaderGoldenContainer color="white"/>
        <div className="payment-deposite-body">
            <WithdrawPaymentOption />
            
        </div>

    </>)
}