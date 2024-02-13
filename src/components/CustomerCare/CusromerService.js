import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeaderCare } from "./careHeader"
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export const CustomerCare = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleNevigation=()=>{
        setRedirectToHome(true);
    }
    if (redirectToHome) {
        return <Navigate to="/AppLoginRegisterPage/CustomerService/SeviceCollection" />;
      }
    return (<>
        <HeaderCare backTo="Home"/>
        <div className='listOfCares' onClick={handleNevigation}>
            <div className='care-list'>
                <div className='care-left'>
                    <img alt="phone-logo" src="https://www.bdggame.in/assets/png/CStype3-7588d980.png" />
                    <h5>LiveChat</h5>
                </div>
                <ArrowForwardIosIcon style={{fontSize:20,color:'#6f7079'}}/>
            </div>

        </div>

    </>)
}