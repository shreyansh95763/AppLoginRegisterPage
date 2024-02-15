import { ChartBottomBalls } from "./chartBottomBallsSection";

export const Chart=()=>{
    const lists = [0,1,2,3,4,5,6,7,8,9];
    const list1 = [22,44,5,7,8,2,19,0,5,2];
    const list2 = [5,8,2,12,5,7,9,0,2,4];
    const list3 = [17,19,3,2,6,4,1,9,9,1];
    const list4 = [9,2,4,1,6,11,2,9,7,0];
    return(<>
        <div className="header-chart">
        <div>period</div>
        <div>Number</div>
        </div>
        <div className="chart-body-section">
            <p>Statistic ( last 100 period ) </p>
            <div className="chart-upper-section">
                <div className="table-name">Winning Number</div>
                <div className="chart-upper-numbers">
                    {lists.map((value)=>(<div className="upper-number">{value}</div>))}
                </div>
            </div>

            <div className="chart-upper-section">
                <div className="table-name">Missing</div>
                <div className="chart-upper-numbers">
                    {list1.map((value)=>(<div className="table-number">{value}</div>))}
                </div>
            </div>
            <div className="chart-upper-section">
                <div className="table-name">Avg Missing</div>
                <div className="chart-upper-numbers">
                    {list2.map((value)=>(<div className="table-number">{value}</div>))}
                </div>
            </div>
            <div className="chart-upper-section">
                <div className="table-name">Frequency</div>
                <div className="chart-upper-numbers">
                    {list3.map((value)=>(<div className="table-number">{value}</div>))}
                </div>
            </div>
            <div className="chart-upper-section">
                <div className="table-name">Max consecutive</div>
                <div className="chart-upper-numbers">
                    {list4.map((value)=>(<div className="table-number">{value}</div>))}
                </div>
            </div>
        </div>

        <ChartBottomBalls />
    </>)
}