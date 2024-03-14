import Historys from "./HistoryContent.json"
import { useEffect, useState } from "react"
import axios from "axios"
export const BetHistoryRow = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tcdaman.foundercode.org/admin/api/game_result.php?limit=9");
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const intervalId = setInterval(fetchData, 1000); // Fetch data every second

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        };
    }, []);
    return (<>

        {Historys.contents.map((rows) =>
            <div className="history-rows game-history-rows">
                <div className="history-row-content">{rows.period}</div>
                {rows.color.length === 1 ? <>
                    <div className="history-row-content " style={{ fontSize: "1.8rem", fontWeight: "700", color: `${rows.color[0]}` }} >{rows.number}</div>
                    <div className="history-row-content">{rows.bigSmall}</div>
                    <div className="history-row-content ">
                        <div className="color-balls" style={{ backgroundColor: `${rows.color[0]}` }}></div>
                    </div></>
                    : <>
                        <div className="history-row-content numbers" style={{ fontSize: "1.8rem", fontWeight: "700", background: `linear-gradient(to bottom, ${rows.color[0]} 50%,  ${rows.color[1]} 50%)`, WebkitBackgroundClip: 'text',backgroundClip: 'text',color:"transparent" }} >{rows.number}</div>
                        <div className="history-row-content">{rows.bigSmall}</div>
                        <div className="history-row-content ">
                        <div className="color-two-balls"><div className="color-balls" style={{ backgroundColor: `${rows.color[0]}` }}></div>
                            <div className="color-balls" style={{ backgroundColor: `${rows.color[1]}` }}></div>
                            </div>
                        </div>
                    </>}
            </div>
        )}
    </>)
}