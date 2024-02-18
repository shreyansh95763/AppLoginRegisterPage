import Balls from "./balls.json"
import { AddAmount } from "./Amount-select-section";
import { ToggleBetAmount } from "./ToggleBetAmount";
import { useState } from "react";
export const CreateBet=()=>{
    const [modal, setModal] = useState(false);
  const toggleModal = () => {
    console.log(modal);
    setModal(!modal);
  };
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
            <div className="adding-chart" onClick={toggleModal}>
                <div className="big-amount" onClick={toggleModal}>Big</div>
                <div className="small-amount" onClick={toggleModal}>Small</div>
            </div>
        </div>
        {modal && <ToggleBetAmount  toggleModal={toggleModal} />}
    </>)
}