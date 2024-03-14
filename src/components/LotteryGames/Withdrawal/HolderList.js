import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBalance } from '../../../redux/store';
// import './HolderList.css'; // Import CSS file for styling

export const HolderList = (props) => {
    const bals = useBalance();
    const navigate = useNavigate();
    const [accountDetails, setAccountDetails] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const navToHolderDetail = (id) => {
        console.log(id);
        bals.setAccountId(id);
        return navigate("Holder-Detail");
    };

    const handleRadioChange = (id) => {
        setSelectedId(id);
        props.setId(id);
    };

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch(`https://tcdaman.foundercode.org/admin/index.php/Mobile_app/account_get?user_id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Response Data', data);
                    if (data.data && data.data.length > 0) {
                        console.log("Add Account", data.data);
                        setAccountDetails(data.data); // Set only the array part of data
                    } else {
                        console.log("No history data");
                    }
                } else {
                    console.log("Fetch failed");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(JSON.parse(localStorage.getItem("token")));
    }, []);

    return (
        <>
            {accountDetails && accountDetails.length > 0 && // Check if accountDetails is not empty
                accountDetails.map(val => (
                    <div className='ac_holder-list' key={val.id}>
                        <div >
                            <div className='custom-radio'>
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={val.id === selectedId}
                                    onChange={() => handleRadioChange(val.id)}
                                />
                                {/* <div className="inner-circle"></div> */}
                                <h5>{val.name}</h5>
                            </div>
                        </div>
                        <div>
                            <h5>{val.account_no.substring(0, 3) + '*********' + val.account_no.substring(val.account_no.length - 3)}</h5>
                            <KeyboardArrowRightIcon style={{ fontSize: 27, color: "rgb(266, 227, 157)" }} />
                        </div>
                    </div>
                ))
            }
        </>
    );
}
