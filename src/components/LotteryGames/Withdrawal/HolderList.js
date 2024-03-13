import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
export const HolderList=()=>{
    const navigate = useNavigate();
    const navToHolderDetail=()=>{
        return navigate("Holder-Detail")
    }
    return(<>
        <div className='ac_holder-list' onClick={navToHolderDetail}>
            <h5>Shreyansh Tripathi</h5>
            <div><h5>9876******78</h5><KeyboardArrowRightIcon style={{fontSize:27,color:"rgb(266, 227, 157)"}} /> </div>
        </div>
    </>)
}