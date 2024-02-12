import { EarningChartList } from "./earningChartList"

export const EarningChart=()=>{
    return(<>
        <h5 className="nav-heading winning-heading" >Today's earning chart</h5>
        <div className="winning-chart">
        <div></div>
        <div className="winner-table">
        <div className="winner-section">
            <div className="winner-avatar-section">
                <img className="winner-cap" alt="winning-cap" src="https://www.bdggame.in/assets/png/crown2-8b009e96.png"/>
                <img className="winner-avatar" alt="second-winner" src="https://www.bdggame.in/assets/png/3-abfcc056.png" />
                <img className="winner-position" alt="winning-position" src="https://www.bdggame.in/assets/png/place2-2e2fac0d.png" />
            </div >
            <div className="winner-name">
                <p>Mem***JHE</p>
                <div>{'₹'}894,839,199.89</div>
            </div>
        </div>
        <div className="winner-section middle-winner">
            <div className="winner-avatar-section">
                <img className="winner-cap" alt="winning-cap" src="	https://www.bdggame.in/assets/png/crown1-7e4e2fd9.png"/>
                <img className="winner-avatar" alt="second-winner" src="	https://www.bdggame.in/assets/png/16-cf8e1441.png" />
                <img className="winner-position" alt="winning-position" src="https://www.bdggame.in/assets/png/place1-c2ee5099.png" />
            </div >
            <div className="winner-name">
                <p>Mem***RRE</p>
                <div>{'₹'}974,749,458.69</div>
            </div>
        </div>
        <div className="winner-section">
            <div className="winner-avatar-section">
                <img className="winner-cap" alt="winning-cap" src="https://www.bdggame.in/assets/png/crown3-2ca02146.png"/>
                <img className="winner-avatar" alt="second-winner" src="https://www.bdggame.in/assets/png/1-c7e4efc8.png" />
                <img className="winner-position" alt="winning-position" src="	https://www.bdggame.in/assets/png/place3-d9b0be38.png" />
            </div >
            <div className="winner-name">
                <p>Mem***BGZ</p>
                <div>{'₹'}836,638,936.58</div>
            </div>
        </div>

        </div>
        </div>
        <EarningChartList />
    </>)
}