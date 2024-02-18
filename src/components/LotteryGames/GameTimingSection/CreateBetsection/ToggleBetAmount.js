import {useEffect, useState} from "react";
// import { navigate } from "react-router-dom";
export const ToggleBetAmount = (props) => {

 const [amount , setAmount] = useState(1);
 const [balance,setBalance ] = useState(1)
  const [count, setCount] = useState(1);
  useEffect(()=>{
      setBalance(amount*count);
  },[count,amount]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (<>
    <div className="model">
      <div className="overlay"></div>
      <div className="model-contents">
        <div className="header-toggle">
          <h3>Win Go 1Min</h3>
          <div className="select-section">Select Green</div>

        </div>
        <div className="content-toggle">
          <div>
            <div className="content-toggle-rows">
              <div>Balance</div>
              <div className="balance-btn-container">
                <div className="balance-btn" onClick={()=>{setAmount(1)}}>1</div>
                <div className="balance-btn" onClick={()=>{setAmount(10)}}>10</div>
                <div className="balance-btn" onClick={()=>{setAmount(100)}}>100</div>
                <div className="balance-btn" onClick={()=>{setAmount(1000)}}>1000</div>
              </div>
            </div>
            <div className="content-toggle-rows">
              <div>Quantity</div>
              <div className="balance-btn-container">
                <div className="counter-container">
                  {/* <button  onClick={decrement}>-</button> */}
                  <img alt="dec-Image" onClick={decrement} className="btn-incDec-toggle" src="https://bdggame.in/assets/svg/reduce-dd5ca960.svg" />
                  <span className="count">{count}</span>
                  {/* <button className="btn-incDec-toggle" >+</button> */}
                  <img alt="inc-Image" onClick={increment} className="btn-incDec-toggle" src="	https://bdggame.in/assets/svg/add-85167b54.svg " />
                </div>
              </div>
            </div>
            <div className="content-toggle-rows">
              <div></div>
              <div className="balance-btn-container">
                <div className="balance-btn" onClick={()=>{setCount(1)}}>X1</div>
                <div className="balance-btn" onClick={()=>{setCount(5)}}>X5</div>
                <div className="balance-btn" onClick={()=>{setCount(20)}}>X20</div>
                <div className="balance-btn" onClick={()=>{setCount(50)}}>X50</div>
                <div className="balance-btn" onClick={()=>{setCount(100)}}>X100</div>
              </div>
            </div>
            <div className="toggle-checkbox">
              {/* <input className="checkbox-input" type="checkbox" /> */}
              <div className="checkbox-input"></div>
              I agree <div className="check-texts">{'{ '}Pre-sales Rules{' }'}</div>
            </div>
          </div>
        </div>
        <div className="bottom-btn-toggle">
          <div className="btn-toggle" style={{cursor:"pointer"}} onClick={()=>(props.toggleModal)} >Cancel</div>
          <div className="btn-toggle">Total Amount {'₹ '}{balance}.00</div>
        </div>

      </div>
    </div>
  </>)
}