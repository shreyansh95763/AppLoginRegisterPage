import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
export const ActivityRebateBody = () => {
    return (<>
        <div className=" rebate-container" >
            <div className='rebate-first-div' >All-Total betting rebate</div>
            <div className='rebate-second-div'>
                <VerifiedUserIcon style={{color:"#D2A753",fontSize:19}} />
                Real-time count
            </div>
            <div className='rebate-third-div'>
                <img alt="pic" src='https://bdggame.in/assets/png/wallet-6940e061.png' />
                <span >0.00</span>
            </div>
            <div className='rebate-fourth-div'>Upgrade VIP level to increase rebate rate</div>
            <div className='rebate-fifth-div'>
                <div>
                    <div>Today rebate</div>
                    <div style={{fontWeight:660}}>0</div>
                </div>
                <div>
                    <div>Total rebate</div>
                    <div style={{fontWeight:660}}>0</div>
                </div>
            </div>
            <div className='rebate-six-div'>Automatic code washing at 01:00:00 every morning</div>
            <div style={{ color: "white", background: "linear-gradient(180deg, #A9AAB5 0%, #6F7381 100%)" }} className="deposite-amount-button">One-Click Rebate</div>
        </div>
        <div className='rebate-history-heading'>Rebate History</div>
            <div style={{ color: "#efbb60", background: "transparent",border:"1px solid #efbb60" ,width:"90%",display:"flex",justifyContent:"center"}} className="deposite-amount-button">All History</div>
    </>)
}