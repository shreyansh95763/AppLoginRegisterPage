import List from "./pvrList.json";
export const PVC=()=> {
    return(<>
        <h5 className="nav-heading" >PVC</h5>
        <div className="display-flex lotteryList-container">
        {List.list.map((elem)=>(
            <div className="slots-big-container">
                <img alt="lotter-pic" src={elem.image} />
                <h4 className="text-on-pic">PVC</h4>
            </div>
           ))}
           
        </div>
    </>);
}