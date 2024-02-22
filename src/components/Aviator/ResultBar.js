import React, { useState, useEffect } from 'react';
import Lists from "./ResultBar.json";
import HistoryIcon from '@mui/icons-material/History';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const ResultBar = () => {
    const [buttonClicked, setButtonClicked] = useState(true);
    const handleClickEvent = () => {
        setButtonClicked(!buttonClicked);
    }


    const [list, setList] = useState(Lists.lists);
    const listLength = list.length;

    useEffect(() => {
        const interval = setInterval(() => {
            handleAddElement();
        }, 3000); // Perform the circular operation every 10 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [list]); // Run the effect whenever the list changes

    const handleAddElement = () => {
        // Get the last element from the list
        const lastElement = list[listLength - 1];

        // Remove the last element from the list
        const updatedList = list.slice(0, listLength - 1);

        // Add the last element to the beginning of the list
        setList([lastElement, ...updatedList]);
    };

    return (<>
        <div className="result-bar">
            {list.map((data, index) => (
                <div key={index} className="result-bar-element" style={{ color: `${data.color}` }}>
                    {data.number}
                </div>
            ))}
            <div className='result-bar-history' onClick={handleClickEvent} >{buttonClicked ? <div><HistoryIcon /> <ArrowDropUpIcon style={{ fontSize: 30 }} /></div> : <><HistoryIcon style={{ color: "red" }} /> <ArrowDropDownIcon style={{ fontSize: 30, color: "red" }} /></>} </div>
        </div>
        {/* {buttonClicked && <div className='history-result-bar'>
            <h5>ROUND HISTORY </h5>
            <div className='result-bar'>
            {list.map((data, index) => (
                <div key={index} className="result-bar-element" style={{ color: `${data.color}` }}>
                    {data.number}
                </div>
            ))}
            </div>
        </div>} */}
    </>
    );
};
