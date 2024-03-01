export const VIPCard=()=>{
    return(<>
        <div className="vip-card-container">
            <div className="vip-card-div1">
                <div className="vip-card-left">
                    <div className="vip-card-left-div1">
                        <img alt="image" src="https://bdggame.in/assets/png/1-d951dc6d.png" />
                        <h3>VIP1</h3>
                        <img className="vip-card-lock-img" alt="image"  src="https://bdggame.in/assets/png/ununlocked-b5a4c7d0.png" />
                        <p>Not open yet</p>
                    </div>
                    <p>Upgrading VIP1 requires</p>
                    <p>3000EXP</p>
                </div>
                <img className="vip-card-logo-img" alt="image" src="https://bdggame.in/assets/png/1-1fca7935.png" />

            </div>
            <div className="vip-card-div2">Bet {''}1=1EXP</div>
            <div className="vip-card-div3">
                <div></div><p>VIP1</p>
            </div>
            <div className="vip-card-div4"></div>
            <div className="vip-card-div5">
            <p>0/3000</p>
            <div>3000 EXP can be leaved up</div>
            </div>
        </div>
    </>)
}