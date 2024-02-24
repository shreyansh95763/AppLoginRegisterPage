import { AwardBody } from "./AwardBody"
import { AwardHeader } from "./AwardHeading"

export const ActivityAward = () => {
    return (<>
        <AwardHeader />
        <div className="activity-body-container">
            <AwardBody />
        </div>
    </>)
}