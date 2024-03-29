import React from 'react';
import List from "./popularPicLists.json"
import {ProgressBar} from './progressbar';

export const Popular=()=> {
  return (<>
    <h5 className="nav-heading" >Popular</h5>
    <div>
    <div className="display-flex lotteryList-container">
           {List.list.map((elem)=>(
            <div className="lottery-pics-container popular-pics ">
                <img alt="lotter-pic" src={elem.image} />
                <ProgressBar percentage={elem.percentage} text={elem.text} />
            </div>
           ))}
           
        </div>
       {/* 50% filled */}
    </div>
    </>);
}
