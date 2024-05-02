import { useEffect, useState } from "react";
import { HistoryHeader } from "../LotteryGames/Deposite/DepositeHistory/HistoryHeader"

export const Notification = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/notification?userid=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Response Data', data)
                    if (data.data && data.data.length > 0) {
                        console.log("Deposite wallets", data.data);
                        setData(data.data);
                    }
                    console.log("Wallet", data.data);
                } else {
                    setData(await response.json());
                    console.log("Not history")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(JSON.parse(localStorage.getItem("token")));
    }, []);
    return (<>
        <HistoryHeader name="Notifications" />
        {data.map((value) => (<>
            <div class="card  m-2" style={{ backgroundColor: "#404040" }}>
                <div class="card-body ps-3 text-light fs-6 fw-light d-flex justify-content-between p-1 align-items-center">
                <div className="pt-2" dangerouslySetInnerHTML={{ __html: value.disc }}></div>
                    <img src={value.image} alt="laj" style={{width:"2rem",height:"2rem"}}/>
                </div>
            </div>
        </>))}
    </>)
}