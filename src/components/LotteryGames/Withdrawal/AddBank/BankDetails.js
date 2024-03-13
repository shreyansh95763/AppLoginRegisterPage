import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const BankDetails = () => {
    const [data, setData] = useState({
        "user_id": "4",
        "name": "",
        "bank_name": "",
        "ifsc": "",
        "account_no": "",
        "branch": "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addAccount = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/add_account',
                {
                    ...data,
                    account_no: parseInt(data.account_no) // Ensure account_no is an integer
                }
            );
            // Handle successful response
            console.log('API response:', response.data);
            toast.success(response.data.msg);
        } catch (error) {
            // Handle error
            console.error('Error:', error);
            console.log('Error response:', error.response.data);
            toast.error(error.response.data.msg, {
                position: "top-right",
              });
        }
    };
    return (
        <div className='add-bank-container' >
            <div className="add-bank-worn">
                <img alt="lkaj" src="https://bdggame.in/assets/png/GoogleTip-620c4aae.png" />
                To ensure the safety of your funds, please bind your bank account
            </div>
            <div className='add-bank-details'>
                <div className='input-section '>
                    <div className='inputName-section display-flex'><PersonIcon style={{ color: "#f1c271", fontSize: "1.9em" }} /><h3>Full Recipient's Name</h3></div>
                    <input
                        type='text'
                        name="name"
                        value={data.name}
                        onChange={handleInput}
                        placeholder='Please enter your name'
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><AccountBalanceIcon style={{ color: "#f1c271", fontSize: "1.9em" }} /><h3>Bank Name</h3></div>
                    <input
                        type='text'
                        name="bank_name"
                        value={data.bank_name}
                        onChange={handleInput}
                        placeholder='Please enter your bank name'
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><h3>Bank Account number</h3></div>
                    <input
                        type='text'
                        name="account_no"
                        value={data.account_no}
                        onChange={handleInput}
                        placeholder='Please enter account number'
                        inputMode="numeric"
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><h3>Bank branch name</h3></div>
                    <input
                        type='text'
                        name="branch"
                        value={data.branch}
                        onChange={handleInput}
                        placeholder='Please enter your branch name'
                        required />
                </div>
                <div className='input-section'>
                    <div className='inputName-section display-flex'><h3>IFSC Code </h3></div>
                    <input
                        type='text'
                        name="ifsc"
                        value={data.ifsc}
                        onChange={handleInput}
                        placeholder='Please enter bank ifsc code'
                        required />
                </div>
            </div>
            <div style={{ color: "white", background: "linear-gradient(180deg, #A9AAB5 0%, #6F7381 100%)", margin: "2rem 0 0 0" }} className="deposite-amount-button" onClick={addAccount}>Deposit</div>
            <ToastContainer
            autoClose={3000}
            theme="colored"
            closeOnClick
            draggable
          />
        </div>
    );
}
