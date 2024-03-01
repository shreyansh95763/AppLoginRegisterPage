import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


 const HeaderVIP = () => {
    return (<>
        <div className="header-section" style={{ background: "linear-gradient(90deg, #C4933F 0%, #FAE59F 100%)", padding: "0" }}>
            <div className="main-heading-section" style={{ background: "linear-gradient(90deg, #C4933F 0%, #FAE59F 100%)", position: "sticky", top: "0", width: "100%", paddingTop: ".5rem",zIndex:17 }}>
                <h4 style={{ cursor: "pointer" }}><NavLink className="btn-links" style={{ color: "white" }} to="/AppLoginRegisterPage/Account"><ArrowBackIosIcon /></NavLink></h4>
                <h5 style={{ fontSize: "1.5rem" }}>VIP</h5>
                <div className="flag-section">
                </div>
            </div>
            <div className="vip-header-section">
                <div className='left-header-section'>
                    <img alt="account logo header" src="https://bdggame.in/assets/png/1-c7e4efc8.png" />
                </div>
                <div className='right-header-vip'>
                    <img alt="name logo" src="https://bdggame.in/assets/png/0-78e1ab02.png" />
                    <h5>MEMBERNNGNYSNW</h5>
                </div>
            </div>
        </div >
        <div className="experience-container-vip">
            <div className="experience-div">
                <h5><span>0</span> EXP</h5>
                <div>My experience</div>
            </div>
            <div className="experience-div">
                <div><span style={{color:"white",fontSize:"1.3rem",fontWeight:550}}>0 </span>days</div>
                <div>Payout time</div>
            </div>
        </div>
        <div className="vip-texts">
            VIP levle rewards are settled at 2:00 am on the 1st of every month.
        </div>
    </>)
}
export default HeaderVIP;