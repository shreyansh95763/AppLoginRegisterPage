import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderAccount } from "./HeaderAccount"
import { HeaderBalance } from "./HeaderBalance"
import { ServiceCenter } from "./ServiceCenter"
import { SettingPannelContainer } from "./SettingPannelContainer"
import { TransactionName } from "./TransactionName"

export const AccountMain=()=>{
    return(<>
        <HeaderAccount />
        <HeaderBalance />
        <TransactionName />
        <SettingPannelContainer />
        <ServiceCenter />

        <BottomNavigationBar />
    </>)
}