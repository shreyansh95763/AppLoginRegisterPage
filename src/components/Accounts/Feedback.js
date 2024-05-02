import { useEffect, useState } from "react";
import { HistoryHeader } from "../LotteryGames/Deposite/DepositeHistory/HistoryHeader"
import axios from "axios";
import { toast } from "react-toastify";

export const Feedback = () => {

    const [data,setData] = useState('');
    const handleChange=(e)=>{
      setData(e.target.value);
    }
  
    const handleSubmit=async(e)=>{
        // e.preventDefault();
        var id=localStorage.getItem("token");
        try {
            const response = await axios.post(
              `https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/feedback`,
              {
                userid: id,
                description: data
            },
              {
                
                headers: { 'Content-Type': 'application/json' },
              });
            // Handle successful login response
            console.log(response.data);
            console.log(data,id)
          //   props.history.push('/dashboard');
            if (response.data.status==='200') {
              toast.success(response.data.msg);
              console.log("Response",response.data.id);
            } else {
              toast.warn(response.data.msg);
            }
          } catch (error) {
            // Handle error response
            console.error("Error:", error);
            toast.error("Invalid credentials or You are not a user", {
              position: "top-right",
            });
          }
    }

    return (<>
        <HistoryHeader name="Feedback" />
        <div className='card m-2' style={{ backgroundColor: "#404145", height: "22rem" }}>
            <div className='card-body row '>
                <textarea
                    style={{
                        height: "20rem",
                        paddingTop: ".7rem", // Adjust the padding to move the placeholder text to the top
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        resize: "none", // Prevent resizing of the textarea
                        overflowY: "auto", // Add vertical scrollbar if content exceeds height
                        font: "inherit", // Inherit font styles from parent
                        lineHeight: "1.5", // Set line height for better readability
                        width: "100%", // Set width to fill container
                        boxSizing: "border-box", // Include padding and border in the element's total width and height
                    }}
                    className=' col-12'
                    type="text"
                    value={data}
                    onChange={handleChange}
                    placeholder="Welcome to feedback, please give feedback-please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!"
                    autoComplete="off" />

            </div>
        </div>
        <div className="col-11 mt-5 text-center fs-5" style={{color: "rgb(192, 123, 38)"}}>Send helpful feedback</div>
        <div className="col-11  text-center fs-5" style={{color: "rgb(192, 123, 38)"}}>Chance to win Mystery Rewards</div>
        <img className="col-6 m-auto mt-3 mb-5 d-flex justify-content-center" alt="akj" src="https://bdggame.in/assets/png/feedbackImg-b7a3bd03.png" />
        
        <div className="deposite-amount-button" onClick={()=>{handleSubmit()}} >Submit</div>

    </>)
}