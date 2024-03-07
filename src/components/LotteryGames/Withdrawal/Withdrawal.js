import { HeaderGoldenContainer } from "../Deposite/HeaderContainer"
import { HeaderPaymentWith } from "./HeaderPaymentWith"
import { WithdrawPaymentOption } from "./PaymentOptionWith"

export const Withdrawal = () => {
    return (<>
        <HeaderPaymentWith heading="Withdrawal" history="Withdrawal History" key='1' />
        <HeaderGoldenContainer name="Available balance" color="white"/>
        <div className="payment-deposite-body">
            <WithdrawPaymentOption />
            
        </div>

    </>)
}