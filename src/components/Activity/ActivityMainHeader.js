export const HeaderMainActivity=()=>{
    return(<>
        <div className="header-section" style={{background:"#333",height:"11rem"}}>
            <div className="main-heading-section" style={{position:"sticky",top:"0%",background:"#333",zIndex:11}}>
                <div></div>
                {/* <h3>BDG GAME</h3> */}
                <img style={{height:"3.6rem",width:"8rem",marginTop:"-1rem"}}arl="images" src="https://ossimg.bdgadminbdg.com/IndiaBDG/other/h5setting_20240110060804ufv8.png" />
                <div></div>
            </div>
            <div className="login-content" style={{fontSize:"2rem",marginLeft:".7rem"}}>
                <h4 style={{fontSize:"1.3rem"}}>Activity</h4>
                <p style={{fontSize:".9rem"}}>Please remember to follow the event page.</p>
                <p style={{fontSize:".9rem"}}>We will launch user feedback activities from time to time.</p>
            </div>
        </div>
    </>)
}