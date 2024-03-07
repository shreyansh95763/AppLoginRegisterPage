import { useEffect, useState } from "react"
import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderWallet } from "./HeaderWallet"
import { WalletBody } from "./WalletBody"
import { WalletTransferView } from "./WalletTransferView"
import { useBalance } from "../../redux/store";


export const WalletMain=()=>{
    const { deposite, setDeposite } = useBalance();
    const [walletData, setWalletData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/wallet_dashboard?id=9`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        console.log("ABwallets",data.data[0]);
                        setWalletData(data.data[0]);
                        setDeposite((prev) => ({
                            ...prev,
                            wallet: data.data[0].wallet,
                            
                        }));
                    }
                    console.log("Wallet", data.data[0].wallet);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    return(<>
        <HeaderWallet wallets={walletData.wallet} />
        <WalletTransferView bonus={walletData.bonus} commission={walletData.commission} winning_wallet={walletData.winning_wallet} />
        <WalletBody />
        <BottomNavigationBar />
    </>)
}