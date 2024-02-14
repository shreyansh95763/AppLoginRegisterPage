import Historys from "./HistoryContent.json"
export const BetHistoryRow = () => {
    return (<>

        {Historys.contents.map((rows) =>
            <div className="history-rows game-history-rows">
                <div className="history-row-content">{rows.period}</div>
                {rows.color.length === 1 ? <>
                    <div className="history-row-content " style={{ fontSize: "1.8rem", fontWeight: "700", color: `${rows.color[0]}` }} >{rows.number}</div>
                    <div className="history-row-content">{rows.bigSmall}</div>
                    <div className="history-row-content ">
                        <div className="color-balls" style={{ backgroundColor: `${rows.color[0]}` }}></div>
                    </div></>
                    : <>
                        <div className="history-row-content numbers" style={{ fontSize: "1.8rem", fontWeight: "700", background: `linear-gradient(to bottom, ${rows.color[0]} 50%,  ${rows.color[1]} 50%)`, WebkitBackgroundClip: 'text',backgroundClip: 'text',color:"transparent" }} >{rows.number}</div>
                        <div className="history-row-content">{rows.bigSmall}</div>
                        <div className="history-row-content ">
                        <div className="color-two-balls"><div className="color-balls" style={{ backgroundColor: `${rows.color[0]}` }}></div>
                            <div className="color-balls" style={{ backgroundColor: `${rows.color[1]}` }}></div>
                            </div>
                        </div>
                    </>}
            </div>
        )}
    </>)
}