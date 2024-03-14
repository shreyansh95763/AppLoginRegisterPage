import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const WithdrawByBank=(props)=>{
    const [amount , setAmount] = useState('');
    const handleChange = (e) => {
        setAmount (
            [e.target.value]
        )
    }
    const submitWithdraw = async () => {
        try {
            if(props.acIds !== "" && amount !==""){
            const response = await fetch('https://tcdaman.foundercode.org/admin/index.php/Mobile_app/withdraw_add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: `${JSON.parse(localStorage.getItem("token"))}`, // Assuming user_id is static
                    account_id: props.acIds, // Pass account_id from props
                    amount: parseInt(amount), // Use the amount state variable
                }),
            });
    
            if (response.ok) {
                console.log("UserIds:",`${JSON.parse(localStorage.getItem("token"))}`," AccountIds:",props.acIds," Amount : ",amount)
                console.log('Withdrawal successful',response);
                toast.success("Successfully Withdrawal ");
                setAmount("");
            } else {
                console.error('Withdrawal failed:', response.statusText);
                toast.success(response.data.msg);
            }}
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response.data.msg, {
                position: "top-right",
              });
            
                                                                                                                                }
    };
    return(<>
        <div className="channel-container">
        <div className="input-amount-section" style={{height:"3rem",marginBottom:"2rem"}}>
                <div style={{borderRight:"1px solid white",paddingRight:"1rem"}}>{'₹'}</div><hr />
                <div style={{marginLeft:"-20rem",marginTop:"-.4rem"}}>
                <input
                 type="number" 
                 value={amount} 
                 onChange={handleChange} 
                 placeholder="Please Enter the Amount" 
                 autoComplete="off" />
                </div>
                <div></div>
                {/* <img onClick={()=>{handleClick(0,"non")}}alt="cancel-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC" /> */}
            </div>
            <div className="with-bal-div">
                <div>Withdrawable Balance <span style={{color:"#d9ac4f"}}>{'₹'}0.00</span></div>
                <div className="all-btn">All</div>
            </div>
            <div className="with-bal-div">
                <div>Withdrawal Amount Recieved</div>
                <div style={{color:"#d9ac4f", marginRight:"1rem",fontSize:"1rem"}}>{'₹'}{amount ? amount:"0.00"}</div>
            </div>
            <div onClick={()=>{submitWithdraw()}} style={{cursor:"pointer" ,fontFamily: "Georgia, serif",margin:"2.4rem auto",latterSpacing:".5rem",color:"white",fontWeight:"660", background: "linear-gradient(180deg, #A9AAB5 0%, #6F7381 100%)"}} className="deposite-amount-button">Withdraw</div>
            <ToastContainer
            autoClose={3000}
            theme="colored"
            closeOnClick
            draggable
          />

            <div className="recharge-instruction-container">
                <p>Need to bet <span className="colorChange">₹0.00</span> to be able to withdraw</p>
                <p>Withdraw time <span className="colorChange">00:00-23:59</span></p>
                <p>Inday Remaining Withdrawal Times <span className="colorChange">3</span></p>
                <p>Withdrawal amount range <span className="colorChange">₹110.00-₹50,000.00</span></p>
            </div>
        </div>
    </>)
}