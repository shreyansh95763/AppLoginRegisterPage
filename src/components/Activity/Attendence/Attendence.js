import { AttendenceBody } from "./AttendenceBody"
import { AttendenceHeader } from "./AttendenceHeader"
import { HeaderPayment } from "./HeaderPayment"

export const Attendence=()=>{
    return(<>
       <HeaderPayment heading="Attendence" />
       <AttendenceHeader />
       <AttendenceBody />
       
    </>)
}