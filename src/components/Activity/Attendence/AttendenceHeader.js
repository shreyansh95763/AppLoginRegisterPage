export const AttendenceHeader = () => {
    return (<>
        <div className="attendence-container" style={{ padding: ".5rem" }} >
            <div className="attendence-content" style={{ marginLeft: ".2rem" }}>
                <h5 style={{ fontSize: "1.3rem", margin: ".6rem 0", fontWeight: "550" }}>Attendance bonus</h5>
                <div style={{ margin: "0",fontSize:".8rem" }}>Get rewards bashed on consecutive login days</div>
                <div className="hero-header">Attendance consecutively <span style={{fontSize:"1.2rem",fontWeight:550}}>0</span> Day</div>
                <p style={{marginBottom:0}}>Accumulated</p>
                <h5  style={{fontWeight:"550",fontSize:"1.2rem"}}>{'₹'}0.00</h5>
                <div className="attendance-header-btn">Games Rules</div>
            </div>
            <div>
            <div className="attendance-header-btn" style={{marginTop:"14.7rem",width:"10rem"}}>Attendance history</div>
            </div>
        </div>
    </>)
}