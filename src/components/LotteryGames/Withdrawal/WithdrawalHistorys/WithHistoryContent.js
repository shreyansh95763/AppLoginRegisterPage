import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const WithHistoryContent=(props)=>{
    return(<>
         {/* <h4 className="deposite-logo-heading" style={{ margin: ".6rem auto" }}><img alt="wallet-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC" />Deposit History</h4> */}
         <div className="channel-container deposit-history-section" style={{fontFamily:"sans-serif",fontWeight:550,margin:".5rem 0"}} >
            <div className='deposite-history-div'>
                <div  style={{ width:"25%",fontSize: "1rem",textAlign:"center",borderRadius: ".3rem",padding:".1rem .7rem .1rem .7rem",color: "#fae59f",background: "#8F5206",fontWeight:"550" }} >Deposit</div>
                { (props.status==='0') && <div style={{color:"#f95959",fontSize:"1.1rem"}}>Failed</div>}
                { (props.status==='1') && <div style={{color:"yellow",fontSize:"1.1rem"}}>Pending</div>}
                { (props.status==='2') && <div style={{color:"green",fontSize:"1.1rem"}}>Success</div>}
            </div>
            <hr size="36px"style={{color:"white"}}></hr>
            <div className='deposite-history-div'>
                <div >Balance </div>
                <div style={{fontSize:"1rem",fontWeight:"530",color:"#ff7f22"}}>{'₹'}{props.balance}.00</div>
            </div>
            <div className='deposite-history-div' style={{margin:".7rem 0"}}>
                <div >Type </div>
                <div>TYpay-QR</div>
            </div>
            <div className='deposite-history-div' style={{margin:".7rem 0"}}>
                <div >Time</div>
                {/* <div>{props.data}</div> */}
                <div>2024-2-22 18:10:07</div>
            </div>
            <div className='deposite-history-div' style={{margin:".7rem 0"}}>
                <div >Order number</div>
                <div>20240128160259775678 <ContentCopyIcon style={{height:"1.2rem",marginTop:0}}/></div>
            </div>
            <br></br>
        </div>
    </>)
}