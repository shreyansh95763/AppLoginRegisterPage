import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export const DepositHistory = () => {
    return (<>

        <h4 className="deposite-logo-heading" style={{ margin: ".6rem auto" }}><img alt="wallet-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC" />Deposit History</h4>
        <div className="channel-container deposit-history-section">
            <div className='deposite-history-div'>
                <div  style={{ width:"23%",border:"1px solid #d9ac4f",fontSize: ".9rem", color: " #8f5206",borderRadius: ".3rem",padding:".1rem .7rem .1rem .7rem",background: "linear-gradient(180deg, #F6E3A3 0%, #D2A753 100%)" }} >Deposit</div>
                <div style={{color:"black"}}>To be paid <ArrowForwardIosIcon  style={{color: "#a6a9ae",fontSize:13}}/> </div>
            </div>
            <hr size="10px"style={{color:"white",margin:".8rem 0",}}></hr>
            <div className='deposite-history-div'>
                <div >Balance </div>
                <div style={{fontSize:"1rem",fontWeight:"530",color:"#ff7f22"}}>{'₹'}10000.00</div>
            </div>
            <div className='deposite-history-div'>
                <div >Type </div>
                <div>TYpay-QR</div>
            </div>
            <div className='deposite-history-div'>
                <div >Time</div>
                <div>2024-2-22 18:10:07</div>
            </div>
            <div className='deposite-history-div'>
                <div >Order number</div>
                <div>P8756889007kjdg6g65678 <ContentCopyIcon style={{height:"1.2rem",marginTop:0}}/></div>
            </div>
            


        </div>
    </>)
}