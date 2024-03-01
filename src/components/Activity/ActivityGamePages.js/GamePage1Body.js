export const GamePage1Body=({deposite,receive})=>{
    return(<>
        <div>
            <div className="game-page1-body">
            <div className="game-page1-div1"><div>first Deposite <span style={{color:"#f3c942"}}>{deposite}</span></div>
            <div style={{color:"#fae59f"}}>+{'₹'} {receive}.00</div>
            </div>

            <div className="game-page1-div2 ">Deposite {deposite} for First time in your Account and you can recieve {receive} </div>
            <div className="game-page1-div3">
                <div>0/{deposite}</div>
                <div>Deposite</div>
            </div>
        </div>
        </div>
    </>)
}