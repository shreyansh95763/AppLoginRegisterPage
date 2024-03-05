import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiamondIcon from '@mui/icons-material/Diamond';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom"
export const BottomNavigationBar = () => {
  console.log(localStorage.getItem('token'))
  return (<>
    
    <nav className="bottom-navbar">
      <NavLink className="bottom-navlink" to= "/AppLoginRegisterPage" ><HomeIcon style={{ fontSize: 41, color: "#D2A753" }} />home</NavLink>
      <NavLink className="bottom-navlink" to={localStorage.getItem('token') ? "/AppLoginRegisterPage/Activity" : "/AppLoginRegisterPage/login"}><EmojiEventsIcon style={{ fontSize: 41, color: "#D2A753" }} />Activity</NavLink>
      <NavLink className="bottom-navlink" to={localStorage.getItem('token') ? "/AppLoginRegisterPage/Promotion" : "/AppLoginRegisterPage/login"}><DiamondIcon style={{ fontSize: 85, color: "#D2A753", clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", padding: "0rem .5rem .4rem .5rem", marginTop: "-2rem", backgroundColor: "#333", borderRadius: "5px" }} /> Promotion</NavLink>
      <NavLink className="bottom-navlink" to={localStorage.getItem('token') ? "/AppLoginRegisterPage/Wallet" : "/AppLoginRegisterPage/login"}><WalletIcon style={{ fontSize: 41, color: "#D2A753" }} />Wallet</NavLink>
      {localStorage.getItem('token') ?
      <NavLink className="bottom-navlink" to="/AppLoginRegisterPage/Account"><PersonIcon style={{ fontSize: 41, color: "#D2A753" }} />Account</NavLink>
      :<NavLink className="bottom-navlink" to="/AppLoginRegisterPage/login"><PersonIcon style={{ fontSize: 41, color: "#D2A753" }} />Account</NavLink>
      }
    </nav>
  </>)
}