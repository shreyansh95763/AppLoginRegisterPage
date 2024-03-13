import { HeaderPayment } from "../../../Activity/Attendence/HeaderPayment"

export const AccountHolderDetail=()=>{
    return(<>
        <HeaderPayment heading='Account Holder Details' />
        <div className="holder-details">
            <h3>Account Details</h3>
            <div><h5>Account holder name</h5> <h5>Shreyansh Tripathi</h5></div>
            <div><h5>Bank Name</h5> <h5>Canara Bank</h5></div>
            <div><h5>Account Number</h5> <h5>8763********687</h5></div>
            <div><h5>Phone</h5> <h5>9865435687</h5></div>
        </div>
    </>)
}