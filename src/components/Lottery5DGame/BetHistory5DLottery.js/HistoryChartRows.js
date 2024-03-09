import Historys from "./HistoryContent.json"
export const BetHistoryRow5D = () => {
    return (<>

        {Historys.contents.map((rows) =>
            <div className="history-rows game-history-rows">
                <div className="history-row-content">{rows.period}</div>
                <div className="result-history-section">
                    {rows.result.map((nums) => (
                        <div className="history-row-content-5d" style={{ fontSize: ".9rem" }} >{nums}</div>
                    ))}
                </div>
                <div className="history-row-content-5d" style={{ fontSize: ".9rem", border: "1px solid #D9AC4F", background: "#D9AC4F", color: "#8f5206" }}>{rows.sum}</div>


            </div>
        )}
    </>)
}