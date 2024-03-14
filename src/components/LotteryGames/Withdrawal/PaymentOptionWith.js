import { useState } from "react"
import { AddBank } from "./AddBank"
import { WithdrawByBank } from "./WithdrawByBank"
import { WithdrawHistory } from "./WithdrawHistory"
import { USDTWithdraw } from "./USDTmethodWith"
import { HolderList } from "./HolderList"

export const WithdrawPaymentOption=()=>{
    const [Ac_Id,setAcId] = useState(null);
    const [gridStyle,setGridStyle] = useState({
        grid1:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)", color: "#8f5206" }
    })
    const [page,setPage]=useState(1);
    const handleClick=(page,grids)=>{
        setPage(page);
        setGridStyle({
            [grids]:{background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)",color: "#8f5206"}
        })
    }
    return (<>
        <div className="payment-option">
            <div style={gridStyle.grid1} onClick={()=>{handleClick(1,"grid1")}} className="payment-option-section">
                <img className="qr-section" alt="QR section" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/WithBeforeImgIcon_20240110091443y6uj.png" />
                <p>BANK CARD</p>
            </div>
            <div style={gridStyle.grid2} onClick={()=>{handleClick(2,"grid2")}} className="payment-option-section">
                <img className="qr-section" alt="QR section" src="https://ossimg.bdgadminbdg.com/IndiaBDG/payNameIcon/payNameIcon_20240110090829ntd3.png" />
                <p>USDT</p>
            </div>
        </div>
        {
            page===1 ?
             <>
            <HolderList setId={setAcId} />
            <AddBank text="Add a bank Account Number"/>
            <WithdrawByBank acIds={Ac_Id} />
            <WithdrawHistory /></>
            :
            <>
            <AddBank text="Add address"/>
            <USDTWithdraw />
            <WithdrawHistory />
            </>
        }
    </>)
}