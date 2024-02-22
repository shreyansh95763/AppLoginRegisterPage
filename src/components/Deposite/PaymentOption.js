import { useState } from "react";

export const PaymentOptions = () => {
    const [gridStyle,setGridStyle] = useState({
        grid1:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)"}
    })
    const handleClick=(grids)=>{
        setGridStyle({
            [grids]:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)"}
        })
    }
    return (<>
        <div className="payment-option">
            <div style={gridStyle.grid1} onClick={()=>{handleClick("grid1")}} className="payment-option-section">
                <img className="qr-section" alt="QR section" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon2_20240110090938rryt.png" />
                <p>UPI</p>
            </div>
            <div style={gridStyle.grid2} onClick={()=>{handleClick("grid2")}} className="payment-option-section">
                <img className="qr-section" alt="QR section" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110091055d5c2.png" />
                <p>PAYTM</p>
            </div>
            <div style={gridStyle.grid3} onClick={()=>{handleClick("grid3")}} className="payment-option-section">
                <div className="offs-container">
                    <img className="offs" alt="off" src="https://bdggame.in/assets/png/gift-e5e02897.png" />
                    <p>+2%</p>
                </div>
                <img className="qr-section qr-of-bonus" alt="QR section" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20231209230609nudu.png" />
                <p>TRX 2% BONUS</p>
            </div>
            <div style={gridStyle.grid4} onClick={()=>{handleClick("grid4")}} className="payment-option-section">
                <img className="qr-section" alt="QR section" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110090829ntd3.png" />
                <p>USDT 3% BONUS</p>
            </div>
        </div>
    </>)
}