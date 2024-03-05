import { NavLink } from "react-router-dom"
import { useBalance } from "../../redux/store";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const HeaderWallet=()=>{
    const bals = useBalance();
    return (<>
         <div className="header-section" style={{background: "linear-gradient(90deg, #C4933F 0%, #FAE59F 100%)" ,padding:"0"}}>
            <div className="main-heading-section" style={{ background: "linear-gradient(90deg, #C4933F 0%, #FAE59F 100%)",position:"sticky",top:"0",width:"100%",paddingTop:".5rem"}}>
                <h4 style={{ cursor: "pointer" }}><NavLink className="btn-links" style={{ color: "white"}} to="/AppLoginRegisterPage/Activity"><ArrowBackIosIcon /></NavLink></h4>
                <h5 style={{fontSize:"1.5rem" }}>Wallet</h5>
                <div className="flag-section">
                   </div>
            </div>
            <div className="wallet-header">
                <img alt="wallet logo " src="https://bdggame.in/assets/png/wallets-f7d6f3d6.png" />
                <div>{'₹'}{bals.deposite}.00</div>
                <p>Total Balance</p>
            </div>
        </div>
    </>)
}