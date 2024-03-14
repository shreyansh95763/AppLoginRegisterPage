import { HeaderPayment } from "../../../Activity/Attendence/HeaderPayment";
import { useBalance } from "../../../../redux/store";
import { useEffect } from "react";

export const AccountHolderDetail=()=>{
    const bals= useBalance()
    useEffect(()=>{
        console.log(bals.accountId);
    })

    return(<>
        <HeaderPayment heading='Account Holder Details' />
        <div className="holder-details">
            <h3>Account Details</h3>
            <div><h5>Account holder name</h5> <h5>{bals.accountId.name}</h5></div>
            <div><h5>Bank Name</h5> <h5>{bals.accountId.bank_name}</h5></div>
            <div><h5>Account Number</h5> <h5>{bals.accountId.account_no.substring(0, 3) + '*********' + bals.accountId.account_no.substring(bals.accountId.account_no.length - 3)}</h5></div>
            <div><h5>IFSE</h5> <h5>{bals.accountId.ifsc}</h5></div>
        </div>
    </>)
}