import { useEffect, useState } from 'react';
import { WithHistoryContent } from './WithHistoryContent';

export const WithdrawalHistoryList = () => {
    const [withdrawHistory, setWithdrawHistory] = useState([]);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/withdraw_history?id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Response Data', data)
                    if (data.data && data.data.length > 0) {
                        console.log("Deposite wallets", data.data);
                        setWithdrawHistory(data);
                    }
                    console.log("Wallet", data.data);
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
        {withdrawHistory.status ==='200' && <>
            {withdrawHistory.data.reverse().map(val => (
                <WithHistoryContent balance={val.amount} status={val.status} />
            ))}
        </>}
    </>)

}