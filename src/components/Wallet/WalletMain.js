import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderWallet } from "./HeaderWallet"
import { WalletBody } from "./WalletBody"
import { WalletTransferView } from "./WalletTransferView"

export const WalletMain=()=>{
    return(<>
        <HeaderWallet />
        <WalletTransferView />
        <WalletBody />
        <BottomNavigationBar />
    </>)
}