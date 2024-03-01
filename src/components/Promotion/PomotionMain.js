import { BottomNavigationBar } from "../bottomNavigationBar"
import { HeaderPromotion } from "./HeaderPromotion"
import { PromotionBody } from "./PromotionBody"
import { PromotionHeaderLower } from "./PromotionHeaderLower"

export const PromotionMain=()=>{
    return(<>
        <HeaderPromotion />
        <PromotionHeaderLower />
        <PromotionBody />



        <BottomNavigationBar />
    </>)
}