import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import { FaMinus } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { logoutUser } from "../../Redux/Slices/authSlice";
// import { API } from "../../API/API";

export default function AviatorButton({ socketData }) {
  // console.log("socket data",socketData.CheckPeriodNo)
  // const token = sessionStorage.getItem("token");
  // const userId = sessionStorage.getItem("userData");
  // // let uId = sessionStorage.getItem("userName");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const [AButton, setAButton] = useState(0);

  // const [betData, setBetData] = useState({
  //   periodId: "",
  //   amount: "",
  //   cashout_amount: "",
  // });

  // // console.log("betData",betData)
  // // status==0---BET
  // // status==1---Cancel
  // // status==2---CashOut
  // // console.log("cashout_cond", betData.periodId, periodNumber, status);

  // useEffect(() => {
  //   console.log("nextgamesno", socketData.CheckPeriodNo);
  //   console.log("status", socketData.status);
  //   console.log("betdata", socketData.betData);
  //   // console.log("useEffect_con",socketData.CheckPeriodNo);
  //   // console.log("useEffect_con",socketData.CheckPeriodNo);

  //   console.log("period", betData.periodId, socketData.period);
  //   if (
      
  //     Number(betData.periodId) > Number(socketData.period) &&
  //     Number(socketData.status) > 0
  //   ) {
  //     console.log("cacel confirmation")
  //     setAButton(1);
  //   } else if (Number(betData.periodId) === Number(socketData.period) && socketData.status == 0) {
  //     setAButton(1);
  //   } else if (
  //     socketData.status == 1 &&
  //     socketData.betData != "" &&
  //     betData.periodId != ""
  //   ) {
  //     setAButton(2);
  //   } else if (
  //     socketData.CheckPeriodNo == "false" &&
  //     socketData.status >= 0 &&
  //     socketData.betData == "" &&
  //     Number(betData.periodId) == Number(socketData.period)
  //   ) {
  //     //  console.log('pppp')
  //     setAButton(0);
  //   }

  //   // else if(socketData.status==2  && betData.periodId != socketData.period+1 ){
  //   //   setAButton(0);
  //   // }

  //   // if (betData.periodId === "" && socketData.status >= 0) {
  //   //   setAButton(0);
  //   // } else if (
  //   //   (betData.periodId != "" &&
  //   //     socketData.status == 0 &&
  //   //     periodNumber == betData.periodId) ||
  //   //   (betData.periodId != "" &&
  //   //     socketData.status >= 0 &&
  //   //     periodNumber + 1 == betData.periodId)
  //   // ) {
  //   //   setAButton(1);
  //   // } else if (periodNumber === betData.periodId && socketData.status ==  1) {
  //   //   setAButton(2);
  //   // }
  // }, [betData, socketData]);

  // const BetPlace_API = async () => {
  //   try {
  //     if (count < 10) {
  //       toast.error("Minimum Bet amount is 10 Rupees !!");
  //       return;
  //     }
  //     if (socketData.status === 0) {
  //       setBetData({
  //         periodId: socketData.period,
  //         amount: count,
  //         cashout_amount: "",
  //       });
  //     } else {
  //       setBetData({
  //         periodId: parseInt(socketData.period) + 1,
  //         amount: count,
  //         cashout_amount: 0,
  //       });
  //     }
  //     // console.log("placebetData",socketData.period);
  //     let modPeriod =
  //       socketData.status === 0
  //         ? socketData.period
  //         : parseInt(socketData.period) + 1;
  //     const response = await API.post(
  //       `/AviatorBetPlace`,
  //       {
  //         uid: userId,
  //         periodno: modPeriod,
  //         amount: count,
  //         Gameid: 2,
  //       },
  //       { headers: { Authorization: token } }
  //     );

  //     const { data } = response.data;
  //     // console.log("betplace", response);
  //     console.log("betres->", data);

  //     if (data === "Bet Placed.") {
  //       toast.success("Successfully Bet Placed");
  //     } else {
  //       toast.error(data);
  //     }
  //   } catch (e) {
  //     console.log("Error While Fetch BetPlace_API", e);
  //     if (
  //       e.response.data.showableMessage ===
  //       "Please login to access this resource"
  //     ) {
  //       sessionStorage.clear();
  //       dispatch(logoutUser());
  //       navigate("/");
  //     }
  //   }
  // };

  // const Cashout_API = async () => {
  //   try {
  //     let res = await API.post(
  //       `/AviatorCashOut`,
  //       { uid: userId, periodno: betData.periodId, multiplayer: 2, Gameid: 2 },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     setBetData({
  //       periodId: "",
  //       amount: "",
  //       cashout_amount: "",
  //     });
  //     console.log("cash", res);
  //     const data = res.data.data;
  //     console.log("cashoutres->", data);
  //     if (data === "Cash Out") {
  //       toast.success(res.data.data);

  //       setAButton(0);
  //       // console.log(res, "akjfjjjoi", periodNumber);
  //     } else {
  //       toast.error(data);
  //     }
  //   } catch (e) {
  //     console.log("Error While Fetch Cashout_API", e);
  //     if (
  //       e.response.data.showableMessage ===
  //       "Please login to access this resource"
  //     ) {
  //       sessionStorage.clear();
  //       dispatch(logoutUser());
  //       navigate("/");
  //     }
  //   }
  // };

  // const AvbetCancle_API = async () => {
  //   try {
  //     let res = await API.post(
  //       `/AviatorBetCancel`,
  //       { uid: userId, periodno: betData.periodId, Gameid: 2 },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     // console.log("cancle", res);
  //     const data = res.data.data;
  //     console.log("cancleres->", data);
  //     if (data === "Cancel Bet") {
  //       toast.success(res.data.data);

  //       setBetData({
  //         periodId: "",
  //         amount: "",
  //         cashout_amount: "",
  //       });
  //     } else {
  //       toast.error(data);
  //     }
  //   } catch (e) {
  //     console.log("Error While Fetch AvbetCancle_API", e);
  //     if (
  //       e.response.data.showableMessage ===
  //       "Please login to access this resource"
  //     ) {
  //       sessionStorage.clear();
  //       dispatch(logoutUser());
  //       navigate("/");
  //     }
  //   }
  // };

  return (
    <>
      {/* <div className="canvas-main-div mt-3 mx-auto"> */}
      {/* <div className="row"> */}
      <div className="col-md-6 text-center " style={{marginLeft:"38%",marginTop:".6rem"}} >
        <div className="bet-btn-main-div mt-0 ">
          <div className="row mt-3">
            <div className="col-md-9 col-sm-12 mx-auto">
              <div className="row">
                <div className="col-5  d-flex justify-content-center flex-column  ">
                  <div className="counter-div d-flex w-100 justify-content-between p-1">
                    <div className="count-div d-flex justify-content-center">
                      <p>{count}</p>
                    </div>
                    <div className="d-flex count-icons my-auto">
                      <RemoveIcon
                        onClick={() => {
                          if(count>0){
                          setCount((count) => count - 10);
                        }}}
                        className="m-icon me-1"
                      />
                      <AddIcon
                        onClick={() => {
                          setCount((count) => count + 10);
                        }}
                        className="p-icon"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="row mt-1">
                      <button
                        className="col Amount-btn m-1"
                        onClick={() => {
                          setCount(100);
                        }}
                      >
                        100 ₹
                      </button>
                      <button
                        className="col Amount-btn m-1"
                        onClick={() => {
                          setCount(200);
                        }}
                      >
                        200 ₹
                      </button>
                    </div>
                    <div className="row mt-1">
                      <button
                        className="col Amount-btn mx-1"
                        onClick={() => {
                          setCount(500);
                        }}
                      >
                        500 ₹
                      </button>
                      <button
                        className="col Amount-btn mx-1"
                        onClick={() => {
                          setCount(1000);
                        }}
                      >
                        1000 ₹
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-7 d-flex justify-content-start mx-auto">
                  <div className="row">
                    {AButton === 0 && (
                      <button
                        type="button"
                        className="btn btn-success bet-button betting-btn my-auto"
                        onClick={()=>setAButton(1)}
                        // onClick={() => BetPlace_API()}
                      >
                        BET
                      </button>
                    )}

                    {AButton === 1 && (
                      <button
                        type="button"
                        className=" btn btn-danger bet-button cancel-button mt-1"
                        onClick={()=>setAButton(0)}
                        // onClick={() => AvbetCancle_API()}
                      >
                        Cancel
                      </button>
                    )}

                    {AButton === 2 && (
                      <button
                        type="button"
                        className="btn btn-warning bet-button mt-1 cashOut"
                        // onClick={() => Cashout_API()}
                        onClick={()=>setAButton(0)}
                      >
                        <div>Cash Out</div>
                        <div>{socketData.timer}x</div>
                      </button>
                    )}
                    {/* {status === 0 && (
                      <button
                        type="button"
                        className="btn btn-success bet-button betting-btn my-auto"
                        onClick={() => BetPlace_API()}>
                        BET
                      </button>
                    )}
                    {betData.periodId === periodNumber && avStatus === 1 && (
                      <button
                        type="button"
                        className="btn btn-warning bet-button mt-1 cashOut"
                        onClick={() => Cashout_API()}>
                        <div>Cash Out</div>
                        <div>{result}x</div>
                      </button>
                    )}
                    {betButton === 2 && betData.periodId !== periodNumber && (
                      <button
                        type="button"
                        className=" btn btn-danger bet-button cancel-button mt-1"
                        onClick={() => AvbetCancle_API()}>
                        Cancel
                      </button>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </>
  );
}
