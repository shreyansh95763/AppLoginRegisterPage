import { useEffect, useState } from "react"
import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderPromotion } from "./HeaderPromotion"
import { PromotionBody } from "./PromotionBody"
import { PromotionHeaderLower } from "./PromotionHeaderLower"
import axios from "axios"

export const PromotionMain=()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fatchData=async(id)=>{
            try{
                const response = await axios.get(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/promotion_dashboard_count?id=${id}`);
                if(response.status===200){
                    console.log("Response Promotion : ",response.data);
                    setData(response.data);
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
        <HeaderPromotion />
        <PromotionHeaderLower total_commission={data.total_commission} />
        <PromotionBody  total_commission={data.total_commission} user_count={data.total_user_count} />
        <BottomNavigationBar />
    </>)
}