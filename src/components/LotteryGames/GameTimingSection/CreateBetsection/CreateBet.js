import Balls from "./balls.json"
import { AddAmount } from "./Amount-select-section";
import { ToggleBetAmount } from "./ToggleBetAmount";
import { useEffect, useState } from "react";
export const CreateBet = (props) => {
    const [nums,setNums] = useState()
    const [modal, setModal] = useState(false);
    const [cols,setCols] = useState(null);
    const [str,setStr] = useState('');
    const toggleModals=(cols,str,num)=>{
        setCols(cols);
        setStr(str);
        setNums(num);
        toggleModal();
    }
    const toggleModal = () => {
        console.log(modal);
        setModal(!modal);
    };
    console.log("Second Nums :",nums);
    return (<>
        <div className="betting-section">
            <div className="color-bet-section">
                <div className="colorBet green " onClick={()=>{toggleModals("#40ad72","Green",10)}}>Green</div>
                <div className="colorBet violet" onClick={()=>{toggleModals("#b659fe","Violet",20)}}>Violet</div>
                <div className="colorBet red" onClick={()=>{toggleModals("#fd565c","Red",30)}} >Red</div>
            </div>
            <div className="number-bet-section">
                {Balls.balls.map((elem,index) => (
                    <img alt="number-balls" onClick={()=>{toggleModals("#d9ac4f","big",index)}} src={elem.ball0} />
                ))
                }
            </div>
            <div className="adding-amount">
                <div className="rendom">Rendom</div>
                <AddAmount />
            </div>
            <div className="adding-chart" >
                <div className="big-amount" onClick={()=>{toggleModals("#d9ac4f","big",40)}}>Big</div>
                <div className="small-amount" onClick={()=>{toggleModals("#6da7f4","small",50)}}>Small</div>
            </div>
        </div>
        {modal && <ToggleBetAmount toggleModal={toggleModal} cols={cols} gameId={props.gameId} str={str} nums={nums} />}
    </>)
}