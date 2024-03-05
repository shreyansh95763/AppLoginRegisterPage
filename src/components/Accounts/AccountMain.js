import { useState, useEffect } from 'react';
import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderAccount } from "./HeaderAccount"
import { HeaderBalance } from "./HeaderBalance"
import { ServiceCenter } from "./ServiceCenter"
import { SettingPannelContainer } from "./SettingPannelContainer"
import { TransactionName } from "./TransactionName"
import { useBalance } from '../../redux/store';

export const AccountMain = () => {

    const bals = useBalance();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/profile?id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data.user);
                    console.log("username",data.user)
                    console.log("Balance",bals);
                    bals.setDeposite(data.user.id);

                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(bals.deposite);
        console.log("lkjhgfh",bals.deposite);
    }, []);

    return (
        <>
            {userData && (
                <>
                    <HeaderAccount name={userData.username} id={userData.custid} login={userData.updated_at} />
                    <HeaderBalance />
                    <TransactionName  />
                    <SettingPannelContainer />
                    <ServiceCenter />
                    <BottomNavigationBar />
                </>
            )}
        </>
    );
};
