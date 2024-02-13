import List from "./slotImg.json";
export const Slots=()=> {
    return(<>
        <h5 className="nav-heading" >Slots</h5>
        <div className="display-flex lotteryList-container ">
           {List.list.map((elem)=>(
            <div className="slots-big-container">
                <img alt="lotter-pic" src={elem.image} />
            </div>
           ))}
           
        </div>
    </>);
}