import { useState } from "react"
import { DepositAmount } from "./DepositAmount"
import { DepositHistory } from "./DepositeHistory"
import { HeaderGoldenContainer } from "./HeaderContainer"
import { HeaderPaymentDe } from "./HeaderPayment"
import { PaymentOptions } from "./PaymentOption"
import { RechargeInfo } from "./RechargeInfo"
import { SelectChannel } from "./SelectChannel"
export const Deposite=()=>{
    const [paymentMeth,setPaymentMeth] = useState();
    return(<>
        <HeaderPaymentDe heading='Deposit' history="Deposit History" key='1' />
            <HeaderGoldenContainer name="Balance" color="#8f5206" />
        <div className="payment-deposite-body">
            <PaymentOptions setPayment={setPaymentMeth} />
            <SelectChannel />
            <DepositAmount paymentMethods={paymentMeth} />
            <RechargeInfo />
            <DepositHistory />
        </div>
    </>)
}