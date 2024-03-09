export const LotteryResult=()=>{
    return(<>
        <div className="lottery-result-container">
            <div className="lottery-result"style={{marginRight:"1rem"}}>
                <div>Lottery</div>
                <p>Result</p>
            </div>
            <div className="result-bolls">
                <div>2</div>
                <p>A</p>
            </div>
            <div className="result-bolls">
                <div>5</div>
                <p>B</p>
            </div>
            <div className="result-bolls">
                <div>1</div>
                <p>C</p>
            </div>
            <div className="result-bolls">
                <div>8</div>
                <p>D</p>
            </div>
            <div className="result-bolls">
                <div>0</div>
                <p>E</p>
            </div>

            <div className="result-bolls">
            <p style={{marginTop:"-.3rem"}}>=</p>
            </div>
            <div className="result-bolls" style={{marginTop:"-1.7rem",color:"#C4933F"}}>
                <div style={{backgroundColor:"#C4933F"}}>1</div>
                <h5></h5>
            </div>
        </div>
    </>)
}