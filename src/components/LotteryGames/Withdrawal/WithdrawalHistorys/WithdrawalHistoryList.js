import { useEffect, useState } from 'react';
import { WithHistoryContent } from './WithHistoryContent';

export const WithdrawalHistoryList=()=>{
    const[withdrawHistory,setWithdrawHistory]=useState([]);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/withdraw_history?id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        console.log("Depositewallets",data);
                        setWithdrawHistory(data,data);
                    }
                    console.log("Wallet", data.data[0].wallet);
                } else {
                    setWithdrawHistory(await response.json());
                    console.log("Not history")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(JSON.parse(localStorage.getItem("token")));
    }, []);

    return (<>
        { withdrawHistory.status===200 &&<>
            {withdrawHistory.map(val=>(
                <WithHistoryContent balance={withdrawHistory.amount} time={withdrawHistory.data} />
            ))}
        </>}
    </>)

}