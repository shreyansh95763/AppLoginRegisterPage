import axios from "axios";
import { useEffect, useState } from "react";
import { HistoryHeader } from "../../LotteryGames/Deposite/DepositeHistory/HistoryHeader";

export const AttendenceHistory=()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fatchData=async(id)=>{
            try{
                const response = await axios.get(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/attendance_history?userid=${id}`);
                if(response.status===200){
                    const modifiedData = response.data.data.map(item => {
                        // Convert datetime from "YYYY-MM-DD" to "DD-Month-YYYY" format
                        const dateParts = item.datetime.split('-');
                        const day = dateParts[2];
                        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        const monthIndex = parseInt(dateParts[1], 10) - 1; // Month index starts from 0
                        const month = monthNames[monthIndex];
                        const year = dateParts[0];
                        const formattedDate = `${day}-${month}-${year}`;
                        // const formattedDate = `${day}-${month}`;
                        return { ...item, datetime: formattedDate };
                    });
                    setData(modifiedData);
                    console.log("Response History : ",response.data.data);
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
    return(<>
        <HistoryHeader name="Attendence History" />
    </>)
}