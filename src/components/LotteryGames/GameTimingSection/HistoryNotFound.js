import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HistoryMyList } from './HistoryMyList';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { VerticalAlignCenterOutlined } from '@mui/icons-material';
export const HistoryNotFound = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const id = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/bet_history?id=${id}`);
                if (response.status === 200) {
                    console.log("Response data my result : ", response.data);
                    setData(response.data.data);
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
    }, [1]);
    return (<>
        <div className="history-N-found ">
            <div className="detail-btn">Detail <ArrowForwardIosIcon style={{ fontSize: 15, borderRadius: "50%", border: "1px solid #d9ac4f", color: "#d9ac4f" }} /></div>
            {data.map((value) => {
                {console.log(value.status, value.amount, value.gameid, value.color, value.datetime, value.win)}
                    (<HistoryMyList status={value.status} amount={value.amount} orderNo={value.gameno} win={value.win} datetime={value.datetime} number={value.number} gameId={value.gameid} />)

            })}
            <div className='flx-just-align lower-image-section'>
                <img alt="History Not Found" src="https://www.bdggame.in/assets/png/empty-ea102850.png" />
                <h5>No data</h5>
            </div>
        </div>
    </>)
}