
import { useEffect, useState } from 'react';
import { DeHistoryContent } from './DeHistoryContent';

export const DepositeHistoryList = () => {
    const[depositHistory,setDepositeHistory]=useState([]);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/deposit_history?id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        console.log("Depositewallets",data);
                        setDepositeHistory(data);
                    }
                    console.log("Wallet", data.data[0].wallet);
                } else {
                    setDepositeHistory(await response.json());
                    console.log("Not history")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(JSON.parse(localStorage.getItem("token")));
    }, []);

    return (<>
        { depositHistory.status==='200' &&<>
            {depositHistory.data.map(val=>(
                <DeHistoryContent balance={val.amount} status={val.status} time={val.created_at} orderNumber={val.orderid} />
            ))}
        </>}
    </>)
}