import List from "./list.json"
export const MiniGame=()=> {
    return(<>
        <h5 className="nav-heading" >Original</h5>
        <div className="display-flex lotteryList-container">
           {List.list.map((elem)=>(
            <div className="lottery-pics-container original-pic ">
                <img alt="lotter-pic" src={elem.image} />
            </div>
           ))}
           
        </div>
    </>);
}