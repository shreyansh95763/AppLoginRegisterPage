import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeaderCare } from "./careHeader"
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { HeaderCollection } from './careCollectionHeader';

export const CustomerCollection = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleNevigation = () => {
        setRedirectToHome(true);
    }
    if (redirectToHome) {
        return <Navigate to="/AppLoginRegisterPage/CustomerService/SeviceCollection" />;
    }
    return (<>
        <HeaderCollection />
        <div className='collection-section'>
        <div className='listOfCares' onClick={handleNevigation}>
            <div className='care-list'>
                <div className='care-left'>
                    <img alt="phone-logo" src="https://www.bdggame.in/assets/png/CStype3-7588d980.png" />
                    <h5>Selt-service Customer Service</h5>
                </div>
                <ArrowForwardIosIcon style={{ fontSize: 20, color: '#6f7079' }} />
            </div>
        </div>
        <div className='listOfCares' onClick={handleNevigation}>
            <div className='care-list'>
                <div className='care-left'>
                    <img alt="phone-logo" src="https://www.bdggame.in/assets/png/CStype3-7588d980.png" />
                    <h5>Technical & Activity & Other Problems</h5>
                </div>
                <ArrowForwardIosIcon style={{ fontSize: 20, color: '#6f7079' }} />
            </div>
        </div>
        </div>
    </>)
}