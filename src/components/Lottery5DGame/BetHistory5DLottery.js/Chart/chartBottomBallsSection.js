export const ChartBottomBalls = () => {
    const listB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "S","E"];

    return (<>
        <div style={{background:"#434343",marginTop:".6rem"}}>
            <div className="header-chart" style={{marginBottom:".9rem"}}>
                <div>period</div>
                <div>Number</div>
            </div>
            {
                listB.map((elem) => (
                    <div className="bottom-balls">
                        <div className="chart-upper-section">
                            <div className="table-name">2024030213107</div>
                            <div className="chart-upper-numbers">
                                {listB.map((value) => (<div className="table-number balls-circular">{value}</div>))}
                            </div>
                        </div>
                        <hr style={{ borderWidth: "1.8px" }} />
                    </div>
                ))
            }
        </div>
    </>)
}