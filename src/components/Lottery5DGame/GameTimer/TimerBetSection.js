// import Balls from "./balls.json";
import Timer from './Timer';
export const TimmerBetSection = (props) => {
    // const duration = 30;
    console.log(props.duration);
    return (<>
        <div className="timmer-container-5d">
            <div className="timmer-left">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "0.4rem 0.8rem 0 -0.7rem", color: 'rgb(134, 134, 135)' }}>Priod</p>
                    <div className="info-button" style={{ border: "1px solid #fae59f" }} >
                        <img style={{ color: "#fae59f" }} alt="information" src="	https://bdggame.in/assets/svg/icon-tip-1e7db3e9.svg" />
                        <p style={{ color: "#fae59f" }}>How to play</p>
                    </div>
                </div>
                <h5 style={{ fontSize: "1.4rem", color: "white", marginTop:".3rem" }}>20240213010970</h5>
            </div>
            <div className="timmer-right">
                <h5 style={{ color: "rgb(134, 134, 135)", marginLeft: "1rem" }}>Time Remaining</h5>
                <div > <Timer duration={props.duration} timeLefts={props.timeLefts} /></div>
            </div>
        </div>
    </>)
}