import Historys from "./HistoryContent.json"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
export const BetHistoryRow = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tcdaman.foundercode.org/admin/api/game_result.php?limit=10");
                if (response.status === 200) {
                    // console.log("aaaaaaaaaaaaaaa",response.data.data);
                    setData(response.data.data);
                    // toast.success(response.data.msg);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                    // toast.warn(response.msg);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Failed to place bet. Please try again.");
            }
        };

        const intervalId = setInterval(fetchData, 1000); // Fetch data every second

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        };
    }, []);
    return (<>

        {datas.map((data) =>( 
            <div className="history-rows game-history-rows">
                <div className="history-row-content">{data.gamesno}</div>
                {((data.number !== '0') && (data.number !== '5')) ? (<>
                    <div className="history-row-content " style={{ fontSize: "1.8rem", fontWeight: "700", color: `${data.colour==="Red" ? "#fd565c":"#40ad72"}` }} >{data.number}</div>
                    <div className="history-row-content" style={(data.number <= 4 ) ? {color:"#6da7f4"} : {color:"#ffa82e"}} >{(data.number <= 4 ) ? "Small" :"Big"}</div>
                    <div className="history-row-content ">
                        <div className="color-balls" style={ { backgroundColor: `${data.colour==="Red" ? "#fd565c":"#40ad72"}` }}></div>
                    </div></>)
                    :(<>
            <div className="history-row-content numbers" style={{ fontSize: "1.8rem", fontWeight: "700", background: `linear-gradient(to bottom, ${data.number === '0' ? "#fd565c" : "green"} 50%, violet 50%)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: "transparent" }}>{data.number}</div>
            <div className="history-row-content" style={{ color: data.number <= 4 ? "#6da7f4" : "#ffa82e" }} >{data.number <= 4 ? "Small" : "Big"}</div>
            <div className="history-row-content ">
              <div className="color-two-balls">
                <div className="color-balls" style={{ backgroundColor: "violet" }}></div>
                <div className="color-balls" style={{ backgroundColor: data.number === '0' ? "#fd565c" : "#40ad72" }}></div>
              </div>
            </div>
          </>)}
                        <ToastContainer />
            </div>
        ))}
    </>)
}