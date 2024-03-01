
import { BenifitsLevel } from "./BenifitsLevel"
import  HeaderVIP  from "./HeaderVIP"
import { VIPCard } from "./VIPCard"
import { VIPhistory } from "./VIPHistory"

export const AccountVIPpage=()=>{
    return(<>
    
        <HeaderVIP />
        <VIPCard />
        <BenifitsLevel />
        <VIPhistory />
    </>)
}