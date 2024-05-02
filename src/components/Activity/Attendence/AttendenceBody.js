import axios from "axios"
import { useEffect, useState } from "react"

export const AttendenceBody = () => {
    
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fatchData=async(id)=>{
            try{
                const response = await axios.get(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/attendance_list_get?userid=${id}`);
                if(response.status===200){
                    const modifiedData = response.data.data.map(item => {
                        // Convert datetime from "YYYY-MM-DD" to "DD-Month-YYYY" format
                        const dateParts = item.datetime.split('-');
                        const day = dateParts[2];
                        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        const monthIndex = parseInt(dateParts[1], 10) - 1; // Month index starts from 0
                        const month = monthNames[monthIndex];
                        const year = dateParts[0];
                        // const formattedDate = `${day}-${month}-${year}`;
                        const formattedDate = `${day}-${month}`;
                        return { ...item, datetime: formattedDate };
                    });
                    setData(modifiedData);
                    console.log("Response : ",response.data.data);
                    // const data = await response.json;
                }
                else{
                    console.log("Getting Error to fetch data ")
                }
            }
            catch{
                    console.log("Error : ");
            }
        }
        fatchData(localStorage.getItem("token"))
    },[])
    return (<>
        <div className="attendence-body">
        {data.map((val,index)=>(<>
            { index !== 6 ? (
            <div className="attendence-divs">
                <div className="upper-attendence">
                    <img alt="kaj" src="https://bdggame.in/assets/png/SignInTop-62491ed7.png" />
                    <p>{'₹'}{val.amount}.00</p>
                </div>
                <img alt="coin icon" src="https://bdggame.in/assets/png/coin-91b2f52b.png" />
                <h5>{index+1} Day</h5>
            </div>)
          

            :(<>
            <div className="attendence-full-divs">
                <div className="upper-attendence-last">
                    {/* <img alt="kaj" src="https://bdggame.in/assets/png/SignInTop-62491ed7.png" /> */}
                    <p>{'₹'}{val.amount}.00</p>
                </div>
                <div className="lower-attendence">
                    <div></div>
                    <div></div>
                    <div className="d-flex flex-column align-items-center">
                        <img alt="coin icon" src="https://bdggame.in/assets/png/coin-91b2f52b.png" />
                        {/* <h5>{val.datetime}</h5> */}
                        <h5>{index+1} Day</h5>
                    </div>
                </div>
            </div>
            <div className="deposite-amount-button" style={{marginTop:"1rem",width:"91%",marginLeft:"1rem"}}>Attendance</div></>)}
        </>))}
        </div>
        
    </>)
}