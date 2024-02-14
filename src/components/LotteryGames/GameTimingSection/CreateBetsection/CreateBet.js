import Balls from "./balls.json"
import { AddAmount } from "./Amount-select-section";
export const CreateBet=()=>{
    return(<>
        <div className="betting-section">
            <div className="color-bet-section">
                <div className="colorBet green ">Green</div>
                <div className="colorBet violet">Violet</div>
                <div className="colorBet red">Red</div>
            </div>
            <div className="number-bet-section">
            {Balls.balls.map((elem)=>(
                <img alt="number-balls" src={elem.ball0} />
            ))  
            }
            </div>
            <div className="adding-amount">
                <div className="rendom">Rendom</div>
                <AddAmount />
            </div>
            <div className="adding-chart">
                <div className="big-amount">Big</div>
                <div className="small-amount">Small</div>
            </div>
        </div>
    </>)
}