import React, { useRef, useState } from "react";

export const ScrollbarPayment = () => {
    const scrollbarContainerRef = useRef(null);
    const [prevKey, setKey] = useState(0);

    const handleScrollRight = (e) => {
        if (scrollbarContainerRef.current) {
            // Scroll the container by a certain amount
            setKey(e.key);
            scrollbarContainerRef.current.scrollLeft += 140; // Adjust the amount as needed
        }
    };

    return (
        <>
            <div className="scrollbar-container" ref={scrollbarContainerRef} >
                {/* Your content */}
                <div className="scrollbar-div" key="1" onClick={handleScrollRight}>
                    <img
                        alt="images of logo"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH8SURBVHgB7Zi9UsJAEMf/dwF0tME3wE477CxjZ8n48R7eE6hPgHaWls6omNbKvIFUjp08QhoZvnLnwlhwJCQkXJhhuF+TyV1uWW4v/+wuYNlQWNxg82LbhQzrNF1NXA0VgDtt8dLzk55a3B7BuR9nL+Jo83zrA0q5yIS6E62hiJtpnpWb9DNXyAJjvnjtn2hDmtHzSgMKb8iDLB8J77et2bvcrSMcfiIPnJ9M7yzXJhXqyAsfRNeGg/z2pHQ181gTrKOmsY6axjpqmg10lLEABaI7SgkB8lLm7ciYdHzkZcYXZ/rm/WvUOT3ge7Q7x8jGrXjue7OD79+j4PTQGecTLrKg2L1o9R+mh+LTvMZ2DY6sUxaVnJaNwx3u+MILEsM+sVdCjVK9GtKoOL546nVgsawZc16mahX8t4HU1fQykSyt4vBHa6azyjVdbpAJJkhO7lAges00lhEuf5CdAHJnf55MTSJUHtagwvQqlIirQkvaHQ8bc05DGlU4XZeuXuws734iJB1dEIpqR7QG+5oJ/RG20D+OJfnjkNFudLNKWAWSH1G03IWfd1Qkb1iJo8KbqMIjlsAmzqZZSejNy1NRmJenwjAtT9TvzCf4yTWTcXmipix10ZCLuJrpH+PyNDnESt0jO7dFZ1AJrXFFvc2UmgkUbs5SW+MWyxL8AcHCtWNBtBm4AAAAAElFTkSuQmCC"
                    />
                    <h5>All</h5>
                </div>
                {/* More scrollbar-div elements */}
                <div className="scrollbar-div" key="2" onClick={handleScrollRight}>
                    <img alt="images of logo" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110090938337p.png" />
                    <h5>UPI</h5>
                </div>
                <div className="scrollbar-div" key="3" onClick={handleScrollRight}>
                    <img alt="images-of-logo" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110091055d5c2.png" />
                    <h5>PAYTM</h5>
                </div>
                <div className="scrollbar-div" key="4" onClick={handleScrollRight}>
                    <img alt="images of logo" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon2_20231209230609ei1d.png" />
                    <h5>TRX</h5>
                </div>
                <div className="scrollbar-div" key="5" onClick={handleScrollRight}>
                    <img alt="images of logo" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110090829ntd3.png" />
                    <h5>USDT</h5>
                </div>
            </div>
        </>
    );
};
