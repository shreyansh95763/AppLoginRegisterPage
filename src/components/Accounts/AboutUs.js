import { ToastContainer } from "react-toastify"
import { HistoryHeader } from "../LotteryGames/Deposite/DepositeHistory/HistoryHeader"

export const AboutUs=()=>{
    return(<>
        <HistoryHeader name="About Us" />
        <div className='card m-2' style={{ backgroundColor: "#404040",height:"25rem" }}>
             <div className='card-body row '>
                <div className="col-12 text-light fw-medium " style={{wordBreak:"break-all"}}>
                        Hi <br></br> 
                        We have gift for you <br />
                        Please enter the gift code below <br />
                        Welcome to feedback, please give feedback-please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback ! 
                </div> 
                {/* <div className="col-12 text-light fs-6 fw-light mb-3">
                    Please enter the gift code below 
                </div> */}
               
               {/* <div className="deposite-amount-button" onClick={()=>{handleSubmit()}} >Recieve</div> */}

             </div>
             <ToastContainer />
        </div>
    </>)
}