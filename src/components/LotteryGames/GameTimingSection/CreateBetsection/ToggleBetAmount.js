import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { navigate } from "react-router-dom";
export const ToggleBetAmount = (props) => {

  const [amount, setAmount] = useState(1);
  const [balance, setBalance] = useState(1)
  const [count, setCount] = useState(1);
  useEffect(() => {
    setBalance(amount * count);
  }, [count, amount]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if(count>0)
    setCount(count - 1);
  };
  const [buttonStyle, setButtonStyle] = useState({
    bal1: { backgroundColor: "#D2A753", color: "#3f270a" },
    bals1: { backgroundColor: "#D2A753", color: "#3f270a" },
  })
  const [buttonStyles, setButtonStyles] = useState({
    bals1: { backgroundColor: "#D2A753", color: "#3f270a" },
  })
  const betNotes=(bal,val)=>{
    setAmount(val);
    setButtonStyle({
      [bal]: { backgroundColor: "#D2A753", color: "#3f270a", fontFamily: "bahnschrift" }
    })
  }
  const bettingNumber=(bals,val)=>{
    setCount(val);
    setButtonStyles({
      [bals]: { backgroundColor: "#D2A753", color: "#3f270a", fontFamily: "bahnschrift" }
    })
  }
        // CHECK BOX STYLE
  const [filled ,setFilled ] = useState(true);
  
  const [checkBoxFilled, setCheckBoxFilled] = useState({
    backgroundColor: "transparent",
    border: "2px solid white",
  });

  const checkBoxStyle = () => {
    setFilled(!filled);
    if (filled === true) {
      setCheckBoxFilled({ backgroundColor: "transparent", border: "2px solid white" });
      console.log("Filled");
    } else {
      setCheckBoxFilled({ backgroundColor: "#d29c3e", border: "3px solid white" });
      console.log("Not Filled");
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    value = parseInt(value);
    value = Math.min(value, 9999);
    // if(value<9999){
      setCount (value)
} 
const placeBet = async () => {
  const token = localStorage.getItem("token");
  const nums = props.nums;
  const gameId = props.gameId;
  console.log("Token",token);
  console.log("Numbers Clicked    ",nums);
  console.log("GameId : ",gameId);
  const data = {
    userid: {token},
    amount: {balance},
    number: {nums},
    gameid: {gameId}
  };

  try {
    console.log("alkjfhhui")
    const response = await axios.post(
      "https://tcdaman.foundercode.org/admin/api/bet.php",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // assuming token is used for authorization
        }
      }
    );
    
    // Handle response
    console.log("Message" , response.data.msg); // Assuming you want to log the response data
    const resData = response.data;
    if(resData.error==="200"){
    toast.success("Bet placed successfully!");
    }
    else{
      toast.warn(resData.msg);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Failed to place bet. Please try again.");
    // Handle error
  }
};


  return (<>
    <div className="model">
      <div className="overlay"></div>
      <div className="model-contents">
        <div className="header-toggle">
          <h3>Win Go 1Min</h3>
          <div className="select-section" style={{color:`${props.cols}`}}>Select {props.str}</div>

        </div>
        <div className="content-toggle">
          <div>
            <div className="content-toggle-rows">
              <div>Balance</div>
              <div className="balance-btn-container">
                <div style={buttonStyle.bal1} className="balance-btn" onClick={()=>{betNotes("bal1",1)}}>1</div>
                <div style={buttonStyle.bal10} className="balance-btn" onClick={()=>{betNotes("bal10",10)}}>10</div>
                <div style={buttonStyle.bal100} className="balance-btn" onClick={()=>{betNotes("bal100",100)}}>100</div>
                <div style={buttonStyle.bal1000} className="balance-btn" onClick={()=>{betNotes("bal1000",1000)}}>1000</div>
              </div>
            </div>
            <div className="content-toggle-rows">
              <div>Quantity</div>
              <div className="balance-btn-container">
                <div className="counter-container">
                  <img alt="dec-Images" onClick={decrement} className="btn-incDec-toggle" src="https://bdggame.in/assets/svg/reduce-dd5ca960.svg" />
                  <span   >
                  <input
                  className="count"
                 type="number" 
                 value={count} 
                 onChange={handleChange} 
                 placeholder="0" 
                 autoComplete="off" />
                </span>
                  <img alt="inc-Images" onClick={increment} className="btn-incDec-toggle" src="	https://bdggame.in/assets/svg/add-85167b54.svg " />
                </div>
              </div>
            </div>
            <div className="content-toggle-rows">
              <div></div>
              <div className="balance-btn-container">
                <div style={buttonStyles.bals1} className="balance-btn" onClick={() => {bettingNumber("bals1",1) }}>X1</div>
                <div style={buttonStyles.bals5} className="balance-btn" onClick={() => {bettingNumber("bals5",5) }}>X5</div>
                <div style={buttonStyles.bals10} className="balance-btn" onClick={() => {bettingNumber("bals10",10) }}>X10</div>
                <div style={buttonStyles.bals20} className="balance-btn" onClick={() => {bettingNumber("bals20",20) }}>X20</div>
                <div style={buttonStyles.bals50}className="balance-btn" onClick={() => {bettingNumber("bals50",50) }}>X50</div>
                <div style={buttonStyles.bals100} className="balance-btn" onClick={() => {bettingNumber("bals100",100) }}>X100</div>
              </div>
            </div>
            <div className="toggle-checkbox">
              {/* <input className="checkbox-input" type="checkbox" /> */}
              <div style={checkBoxFilled} className="checkbox-input" onClick={()=>{checkBoxStyle()}}></div>
              I agree <div className="check-texts">{'{ '}Pre-sales Rules{' }'}</div>
            </div>
          </div>
        </div>
        <div className="bottom-btn-toggle">
          <div className="btn-toggle" style={{ cursor: "pointer" }} onClick={props.toggleModal} >Cancel</div>
          <div className="btn-toggle" onClick={placeBet} >Total Amount {'₹ '}{balance}.00</div>
        </div>

      </div>
      <ToastContainer />
    </div>
  </>)
}