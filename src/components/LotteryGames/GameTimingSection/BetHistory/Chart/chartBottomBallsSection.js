import axios from "axios";
import { useEffect, useState } from "react";

export const ChartBottomBalls=()=>{
    const listB = [0,1,2,3,4,5,6,7,8,9,10];
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
                // toast.error("Failed to place bet. Please try again.");
            }
        };

        const intervalId = setInterval(fetchData, 1000); // Fetch data every second

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        };
    }, []);

    return(<>
        <div>
        {
           datas?.map((nums)=>( 
                <div className="bottom-balls">
                <hr style={{borderWidth: "1.8px"}} />
                <div className="chart-upper-section">
                {/* {console.log("JJJJJJJJJJJJJJJjj")} */}
                <div className="table-name">{nums.gamesno}</div>
                <div className="chart-upper-numbers">
                {listB.map((value) => {
                if (((parseInt(nums.number) === 5) || (parseInt(nums.number) === 0) )&& parseInt(nums.number) === value ){
                  return (
                    <div
                      className="table-number balls-circular"
                      key={value}
                      style={nums.number%2===0 ? { background: `linear-gradient(to bottom, ${nums.number === '0' ? "red" : "green"} 50%, violet 50%)`,color:"white" } : { backgroundColor: "#40ad72",color:"white" }}
                    >
                      {value}
                    </div>
                    );}
                
                else if (parseInt(nums.number) === value) {
                  return (
                    <div
                      className="table-number balls-circular"
                      key={value}
                      style={nums.number%2===0 ? { backgroundColor: "#fd565c",color:"white" } : { backgroundColor: "#40ad72",color:"white" }}
                    >
                      {value}
                    </div>
                  );
                } else if (value === 10) {
                  return (
                    <div
                      className="table-number balls-circular"
                      key={value}
                      style={nums.number <= 4 ? { backgroundColor: "#6da7f4" } : { backgroundColor: "#ffa82e" }}
                    >
                      {nums.number <= 4 ? "S" : "B"}
                    </div>
                  );
                } else {
                  return <div className="table-number balls-circular" key={value}>{value}</div>;
                }
              })}
                </div>
                </div>
            </div>

            ))
        }
        </div>
    </>)
}