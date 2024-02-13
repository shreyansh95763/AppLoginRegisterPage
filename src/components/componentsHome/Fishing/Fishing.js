import List from "./FishingList.json";
export const Fishing=()=> {
    return(<>
        <h5 className="nav-heading" >Fishing</h5>
        <div className="display-flex lotteryList-container">
        {List.list.map((elem)=>(
            <div className="lottery-pics-container original-pic">
                <img alt="lotter-pic" src={elem.image} />
                <h4>Fishing</h4>
            </div>
           ))}
           <div className="lottery-pics-container fish-container">
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamelogo/CQ9/AB3.png" />
               
            </div>
            <div className="lottery-pics-container fish-container">
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamelogo/CQ9/AT05.png" />
         
            </div>
            <div className="lottery-pics-container fish-container">
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamelogo/CQ9/AT01.png" />
           
            </div>
            <div className="lottery-pics-container fish-container">
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamelogo/CQ9/GO02.png" />
           
            </div>
           
        </div>
    </>);
}