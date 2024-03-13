import { HeaderPayment } from "../../../Activity/Attendence/HeaderPayment"
import { BankDetails } from "./BankDetails"

export const AddBanks=()=>{
    return(<>
        <HeaderPayment heading='Add a Bank Account Number' />
        <BankDetails />
    </>)
}