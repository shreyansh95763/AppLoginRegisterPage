import List from "./sportsList.json";
export const Sports=()=> {
    return(<>
        <h5 className="nav-heading" >Sports</h5>
        <div className="display-flex lotteryList-container">
        {List.list.map((elem)=>(
            <div className="slots-big-container">
                <img alt="lotter-pic" src={elem.image} />
                <h4 className="text-on-pic">Sports</h4>
            </div>
           ))}
           
        </div>
    </>);
}