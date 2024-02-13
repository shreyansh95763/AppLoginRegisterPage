import List from "./casinoList.json";
export const Casino=()=> {
    return(<>
        <h5 className="nav-heading" >Casino</h5>
        <div className="display-flex lotteryList-container">
        {List.list.map((elem)=>(
            <div className="slots-big-container">
                <img alt="lotter-pic" src={elem.image} />
                <h4 className="text-on-pic">casino</h4>
            </div>
           ))}
           
        </div>
    </>);
}