import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
export const HeaderHome = () => {
    return (
        <>
            <div className="home-header">
                <div className='left-header'>
                    <div className='heading'><h3>BDG GAME</h3><div></div></div>
                    <div className="header-flag-section">
                        <img alt="logo" src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo=" />
                        <h5>Welcome to BDG GAME</h5>
                    </div>
                </div>
                <div className='right-header'>
                    <button type="submit"><DownloadForOfflineIcon style={{fontSize:30}} /> Download App</button>
                    <button type="submit"><HeadsetMicIcon style={{fontSize:30}}/> Customer Service</button>
                </div>
            </div>
        </>
    );
}