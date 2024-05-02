import { useNavigate } from "react-router-dom";
import List from "./list.json"
export const MiniGame=()=> {
    const Navigate = useNavigate();
    return(<>
        <h5 className="nav-heading" >Original</h5>
        <div className="display-flex lotteryList-container">
           {List.list.map((elem)=>(
            <div className="lottery-pics-container original-pic " onClick={()=>{Navigate("/AppLoginRegisterPage/Aviator")}}>
                <img alt="lotter-pic" src={elem.image} />
            </div>
           ))}
           
        </div>
    </>);
}