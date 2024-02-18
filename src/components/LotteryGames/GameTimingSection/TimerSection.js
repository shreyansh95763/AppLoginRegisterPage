// import Balls from "./balls.json";
import Timer from './Timer';
export const TimmerSection=(props)=>{
    // const duration = 30;
    console.log(props.duration);
    return(<>
        <div className="timmer-container">
            <div className="timmer-left">
            <div className="info-button">
                <img alt="information" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7ZfNUfMwEIbfVYi/fFxIB4gOQgehAszfDDfSQewKgAoEFQA3ZhggHQAVEDqgBHNgJoRByyaEv0SxFcAzgfF7sD0rafVY1lq7QKFfJkprNGFFQ3ETxHUwa+lexZfECYhu5aGNstqNjzu3mBTIrAUhGOfIQYpUo3naOYIvkAlRhQqu5VEjHyWwswtxK0mGG5Szeymo5wjTk7zwfehqcANZ2TN5i1XNZXYDKTWPnEWK51z2mTH9R6OJaR/8fweqI0ttD95sZNtIler5akpnPYSkMQHQqHjmcLAJD81qsC13HZ8/RD5DzUpZS9g3ffr6A6nullzbZr1Sh7W6P9FacCD/p6vswbQMT/kDgSJZmUhg3k2Mhtgb+EEpTJmmDmiCTf3TUfZtoCLKMp0WUTYVKoCyVABlqQDK0q85XBOXkYgue0UfM9U8DsuECC25V5kxUmGwxR28gZhv5Bp+AizxUnTS7Z/sLxUtLsZDSZUa0FI0qFDNRrmGJ7rAx1ydcOkaOaYM6u71nWKwKoFajE8e39KMuCUTlewK3CuZ9GA+lsv9sVYtvvocALdcU6fX9psVnVaHm9V/kn6wGXIZx2cPe2k+0akkrqo1E8hHkgHsiBtJTVg+B+2mwRT6k3oGBJO5hluHrKcAAAAASUVORK5CYII=" />
                <p>How to play</p>
            </div>
            <h5>WinGo 1 Min</h5>
            <div className="timmer-balls">
                <img alt="ball5" src="https://www.bdggame.in/assets/png/n1-dfccbff5.png" />
                <img alt="ball7" src="https://www.bdggame.in/assets/png/n4-cb84933b.png" />
                <img alt="ball3" src="https://www.bdggame.in/assets/png/n6-a56e0b9a.png" />
                <img alt="ball2" src="https://www.bdggame.in/assets/png/n0-30bd92d1.png" />
                <img alt="ball4" src="https://www.bdggame.in/assets/png/n9-a20f6f42.png" />
            </div>
            </div>

            <div className="timmer-right">
                <h5>Time Remaining</h5>
                <div > <Timer duration={props.duration} timeLefts={props.timeLefts}/></div>
                <h4>20240213010970</h4>
            </div>
        </div>
    </>)
}