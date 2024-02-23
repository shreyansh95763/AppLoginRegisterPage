import { useState } from "react";

export const USDTWithdraw=()=>{
    const [amount , setAmount] = useState('');
    const handleChange = (e) => {
        const val = e.target.value;
        setAmount(val); // Update the amount state
        setUsdtAmount(val * 0.012065131259984995); // Calculate usdtAmount based on the new amount value
    
    }
    const [usdtAmount , setUsdtAmount] = useState('');
    const handleChangeUsdt = (e) => {
        const val = e.target.value;
        setUsdtAmount(val); // Update the usdtAmount state
        setAmount(val * 82.88); // Calculate amount based on the new usdtAmount value
    }
    const handleClick=()=>{
        setUsdtAmount('');
        setAmount('');
    }
    return(<>
        <div className="channel-container">
            <h4 className="usdt-heading"><img alt="usdt-logo" src="https://bdggame.in/assets/png/3-6bb1e3bd.png" /><span>Select amount of USDT</span></h4>
        <div className="input-amount-section" style={{height:"3rem",marginBottom:"2rem"}}>
                <div style={{borderRight:"1px solid white",paddingRight:"1rem"}}>{'₹'}</div><hr />
                <div style={{marginLeft:"-20rem",marginTop:"-.4rem"}}>
                <input
                 type="number" 
                 value={amount} 
                 onChange={handleChange} 
                 placeholder="Please Enter Withdrawal Amount" 
                 autoComplete="off" />
                </div>
                <div></div>
                {/* <img onClick={()=>{handleClick(0,"non")}}alt="cancel-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC" /> */}
            </div>
        <div className="input-amount-section" style={{height:"3rem",marginBottom:"2rem"}}>
                <div style={{borderRight:"1px solid white",paddingRight:"1rem"}}><img alt="usdt logo" src="https://bdggame.in/assets/png/3-6bb1e3bd.png" /></div><hr />
                <div style={{marginLeft:"-20rem",marginTop:"-.4rem"}}>
                <input
                 type="number" 
                 value={usdtAmount} 
                 onChange={handleChangeUsdt} 
                 placeholder="Please Enter USDT amount" 
                 autoComplete="off" />
                </div>
                <div></div>
                {/* <img onClick={()=>{handleClick(0,"non")}}alt="cancel-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC" /> */}
            </div>
            <div className="with-bal-div">
                <div>Withdrawable Balance <span style={{color:"#d9ac4f"}}>{'₹'}0.00</span></div>
                <div className="all-btn" onClick={()=>{handleClick()}}>All</div>
            </div>
            
            <div style={{fontFamily: "Georgia, serif",margin:"2.4rem auto",latterSpacing:".5rem",color:"white",fontWeight:"660", background: "linear-gradient(180deg, #A9AAB5 0%, #6F7381 100%)"}} className="deposite-amount-button">Withdraw</div>
       
            <div className="recharge-instruction-container">
                <p>Need to bet <span className="colorChange">₹0.00</span> to be able to withdraw</p>
                <p>Withdraw time <span className="colorChange">00:00-23:59</span></p>
                <p>Inday Remaining Withdrawal Times <span className="colorChange">5</span></p>
                <p>Withdrawal amount range <span className="colorChange">₹1,000.00-₹10,000,000.00</span></p>
                <p>After withdraw, you need to confirm the blockchain main network 3 times before it arrives at your account.</p>
                <p>Please confirm that the operating environment is safe to avoid information being tampered with or leaked.</p>
            </div>
        </div>
    </>)
}