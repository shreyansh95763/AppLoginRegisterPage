export const ChartBottomBalls=()=>{
    const listB = [0,1,2,3,4,5,6,7,8,9,"S"];

    return(<>
        <div>
        {
            listB.map((elem)=>( 
                <div className="bottom-balls">
                <hr style={{borderWidth: "1.8px"}} />
                <div className="chart-upper-section">
                <div className="table-name">2024030213107</div>
                <div className="chart-upper-numbers">
                    {listB.map((value)=>(<div className="table-number balls-circular">{value}</div>))}
                </div>
                </div>
            </div>

            ))
        }
        </div>
    </>)
}