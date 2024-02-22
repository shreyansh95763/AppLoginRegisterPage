import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
export const AviatorBar=()=>{
    return(<>
    <div className="aviator-bar">
        <div className="aviator-bar-left">
            <img alt="Aviator Logo" src="	https://aviator-demo.spribegaming.com/aviator-logo.cafbd29233306bf7.svg" />
            <div><HelpOutlineIcon style={{fontSize:25}}/> <span>How to play?</span></div>
        </div>
        <div className="aviator-bar-right">
            <h5>3000.00</h5>
            <p>USD</p>
           <div style={{borderLeft:"1px solid  #595959",paddingLeft:".5rem"}}><MenuIcon style={{color:"#595959",fontSize:30}} /></div>
        </div>
    </div>

    </>)
}