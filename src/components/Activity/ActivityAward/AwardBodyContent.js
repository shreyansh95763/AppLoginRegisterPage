export const AwardBodyContent=({color,backgroundColor})=>{
    return(<>
         <div className="weekly-tasks-container">
        <div className="weekly-tasks-first-div">
            <div style={{color:`${color}`,background:`${backgroundColor}`}}>Weekly Tasks</div>
            <div>Unfinished</div>
        </div>
        <hr style={{padding:0,margin:0}}></hr>
        <div className="weekly-tasks-second-div">
            <img alt="files-images" src="https://bdggame.in/assets/svg/weeklyType1-105818fb.svg" />
            <p >Weeklyn mission</p>
            <h5>0/200000</h5>
        </div>
        <div className="weekly-tasks-third-div">As long as you meet the requirements, you can collect all rewards together</div>
        <div className="weekly-tasks-four-div">
            <div>Award amount</div>
            <div className="wallet-four-div">
            <img alt="wallet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==" />
            <div style={{color:"#b56c12"}}>{'₹'}100.00</div>
            </div>
        </div>
        <div className="weekly-tasks-five-div"> to Complete</div>
        </div>
    </>)
}