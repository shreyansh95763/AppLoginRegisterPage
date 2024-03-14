import { useState } from "react"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";

export const DepositAmount = ({paymentMethods}) => {

    const [amount, setAmount] = useState(500);
    const [gridStyle, setGridStyle] = useState({
        grid1: { background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)", color: "#8f5206" }
    })
    const handleClick = (bal, grids) => {
        setAmount(bal)
        setGridStyle({
            [grids]: { background: "linear-gradient(90deg,#C4933F -2.95%,#FAE59F 100%)", color: "#8f5206" }
        })
    }
    const handleChange = (e) => {
        setAmount(
            [e.target.value]
        )
    }
    const addAmount = async () => {
        try {
            const response = await axios.post(
                "https://tcdaman.foundercode.org/admin/index.php/Mahajongapi/add_money",
                {
                    userid: `${JSON.parse(localStorage.getItem("token"))}`, // Assuming user id is static
                    amount: amount,
                    amount_id: "2", // Assuming amount_id is static
                    type: `${paymentMethods}`,
                }
            );

            if (response.status === 200) {
                console.log("Successful Deposite", response.data);
                toast.success("Deposit successful"); // Show success toast
                console.log(response.data.payment_link);
                setTimeout(() => {
                    window.location.href = response.data.payment_link;
                }, 1000)
            } else {
                // Error handling for failed deposit
                toast.error("Deposit failed"); // Show error toast
                console.error("Deposit failed:", response.statusText);
                // You may show an error message to the user
            }
        } catch (error) {
            // Error handling for axios error
            toast.error("Error occurred"); // Show error toast
            console.error("Error:", error);
            // You may show an error message to the user
        }
    };

    return (<>
        <div className="channel-container Amount">
            <h4 className="deposite-logo-heading"><img alt="wallet-logo" src="https://bdggame.in/assets/png/saveWallet-2bb70adc.png" /> Deposit Amount</h4>
            <div className="de-Amount">
                <div style={gridStyle.grid1} onClick={() => { handleClick(500, "grid1") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>500</div>
                    <div></div>
                </div>
                <div style={gridStyle.grid2} onClick={() => { handleClick(1000, "grid2") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>1K</div>
                    <div></div>
                </div>
                <div style={gridStyle.grid3} onClick={() => { handleClick(5000, "grid3") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>5K</div>
                    <div></div>
                </div>
                <div style={gridStyle.grid4} onClick={() => { handleClick(10000, "grid4") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>10K</div>
                    <div></div>
                </div>
                <div style={gridStyle.grid5} onClick={() => { handleClick(15000, "grid5") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>15K</div>
                    <div></div>
                </div>
                <div style={gridStyle.grid6} onClick={() => { handleClick(20000, "grid6") }} className="de-Amount-container">
                    <div>{'₹'}</div>
                    <div>20K</div>
                    <div></div>
                </div>
            </div>
            <div className="input-amount-section">
                <div style={{ borderRight: "1px solid white", paddingRight: "1rem" }}>{'₹'}</div><hr />
                <div style={{ marginLeft: "-17rem" }}>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleChange}
                        placeholder="0"
                        autoComplete="off" />
                </div>
                <img onClick={() => { handleClick(0, "non") }} alt="cancel-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC" />
            </div>

            {(amount < 500 && amount > 0) && <p className="amount-restriction-info">Can't be less than 500</p>}
            {amount === 0 && <p className="amount-restriction-info">Can't be less than 0</p>}
            {amount > 50000 && <p className="amount-restriction-info">Can't be more than 50000</p>}
        </div>
        {amount < 500 || amount > 50000 ? <div onClick={addAmount}  style={{ color: "white", background: "linear-gradient(180deg, #A9AAB5 0%, #6F7381 100%)" }} className="deposite-amount-button">Deposit</div> : <div className="deposite-amount-button" onClick={addAmount}  >Deposit</div>}
        <ToastContainer
            autoClose={3000}
            theme="colored"
            closeOnClick
            draggable
        />
    </>)
}