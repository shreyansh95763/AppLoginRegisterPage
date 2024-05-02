import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export const PromotionHeaderLower=({total_commission})=>{
    return(<>
        <div className='promotion-header-section'>
            <h5>{total_commission ? total_commission : 0 } </h5>
            {console.log("null",total_commission)}
            <div className='total-commission'>Yeasterday's total commission</div>
            <p>Upgrade the level to increase commission income</p>
        <div className='subordinate-body'>
            <div className='subordinate-section' style={{borderRight:"2px solid black"}}>
                <div style={{borderTopLeftRadius:"1rem"}}><PersonIcon /> Direct subordinates</div>
                <p>0</p>
                <p>number of register</p>
                <p>0</p>
                <p>Deposite Number</p>
                <p>0</p>
                <p>Deposite Amount</p>
                <p>0</p>
                <p>Number of people making first deposite</p>
               
            </div>
            <div className='subordinate-section'>
                <div style={{borderTopRightRadius:"1rem"}}><PeopleAltIcon /> Team subordinates</div>
                <p>0</p>
                <p>number of register</p>
                <p>0</p>
                <p>Deposite Number</p>
                <p>0</p>
                <p>Deposite Amount</p>
                <p>0</p>
                <p>Number of people making first deposite</p>
               
            </div>
        </div>
        </div>
        <div style={{marginTop:"4rem",fontWeight:650}} className="deposite-amount-button" >INVITATION LINK</div>
    </>)
}