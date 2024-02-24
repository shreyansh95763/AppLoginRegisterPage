
import { BottomNavigationBar } from "../bottomNavigationBar"
import { AwardSection } from "./ActivityAwardSection"
import { ActivityGameSection } from "./ActivityGames"
import ActionAreaCard from "./ActivityGiftCard"
import { HeaderMainActivity } from "./ActivityMainHeader"

export const ActivityMain=()=>{
    return(<>
        <HeaderMainActivity />
        <div className="activity-body-container">
        <AwardSection />
        <ActionAreaCard />
        <ActivityGameSection />

        </div>
        <BottomNavigationBar />
    </>)
}