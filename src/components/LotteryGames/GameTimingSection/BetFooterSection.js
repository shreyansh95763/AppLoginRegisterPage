import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const BetFooter=()=>{
    return(<>
        <div className='bet-footer-container flx-just-align'>
            <div className='footer-container-mid flx-just-align'>
                <div className='both-arrows flx-just-align'>
                    <ArrowBackIosIcon style={{fontSize:20}}/>
                </div>
                <div className='flx-just-align page-render'>
                        1/1689
                </div>
                <div className='both-arrows flx-just-align' style={{background:"gold"}}>
                    <ArrowForwardIosIcon style={{fontSize:20}}/>
                </div>
            </div>
        </div>
    </>)
}