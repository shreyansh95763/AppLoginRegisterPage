export const WithdrawHistory=()=>{
    return(<>
            <h4 className="deposite-logo-heading" style={{margin:"1.5rem auto"}}><img alt="select channel icon " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC" /> Withdrawal History</h4>
            <div className="no-withdrawal-history">
                <img alt="not any history logo" src="https://bdggame.in/assets/png/empty-ea102850.png" />
                <h5>No data</h5>
            </div>
            <div style={{color:"#fae59f",margin:".5rem auto",latterSpacing:".5rem",background:"transparent",fontWeight:"560",border:"1px solid #fae59f", borderRadius:"1rem"}} className="deposite-amount-button">Add History</div>
    </>)
}