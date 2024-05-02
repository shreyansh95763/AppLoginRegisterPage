import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import Historys from "./BetHistory/HistoryContent.json";
const Lists=[
    {
        "no":0,
        "color":["#47ba7c","#ec4cdf"],
        "no_output":"0"
        
    },
    {
        "no":1,
        "color":["#47ba7c"],
        "no_output":"1"
    },
    {
        "no":2,
        "color":["#fd565c"],
        "no_output":"2"
    },
    {
        "no":3,
        "color":["#47ba7c"],
        "no_output":"3"
    },
    {
        "no":4,
        "color":["#fd565c"],
        "no_output":"4"
    },
    {
        "no":5,
        "color":["#47ba7c","#ec4cdf"],
        "no_output":"5"
    },
    {
        "no":6,
        "color":["#fd565c"],
        "no_output":"6"
    },
    {
        "no":7,
        "color":["#47ba7c"],
        "no_output":"7"
    },
    {
        "no":8,
        "color":["#fd565c"],
        "no_output":"8"
    },
    {
        "no":9,
        "color":["#47ba7c"],
        "no_output":"9"
    },
    {
        "no":10,
        "color":["#47ba7c"],
        "no_output":"Green"
    },
    {
        "no":20,
        "color":["#ec4cdf"],
        "no_output":"Violet"
    },
    {
        "no":30,
        "color":["#fd565c"],
        "no_output":"Red"
    },
    {
        "no":40,
        "color":"orenge",
        "no_output":"Big"
    },
    {
        "no":50,
        "color":"blue",
        "no_output":"Small"
    }
]

export const HistoryMyList=(props)=>{
    const {status,amount,orderNo,win,datetime,number,gameId} = props;
    return(
        <div className="channel-container deposit-history-section" style={{fontFamily:"sans-serif",fontWeight:550,margin:".5rem 0"}} >
        <div className='deposite-history-div'>
            <div  style={{ width:"25%",fontSize: "1rem",textAlign:"center",borderRadius: ".3rem",padding:".1rem .7rem .1rem .7rem",color: "#fae59f",background: "#8F5206",fontWeight:"550" }} >Bet</div>
            {/* { (props.status==='0') && <div style={{color:"#f95959",fontSize:"1.1rem"}}>Failed</div>} */}
            { (status==='1') && <div style={{color:"Red",fontSize:"1.1rem"}}>Win</div>}
            { (status==='2') && <div style={{color:"green",fontSize:"1.1rem"}}>Loss</div>}
        </div>
        <hr size="36px"style={{color:"white"}}></hr>
        <div className='deposite-history-div'>
            <div >Balance </div>
            <div style={{fontSize:"1rem",fontWeight:"530",color:"#ff7f22"}}>{'₹'}{amount || 0}.00</div>
        </div>
        <div className='deposite-history-div' style={{margin:".7rem 0"}}>
            <div > Bet Type </div>
            {Lists.map((value)=>(
                (value.no === number) && <div style={{color:`${value.color[0]}`,fontSize:"1.1rem"}}>{value.no_output}</div>
            ))}
            { (status==='2') && <div style={{color:"green",fontSize:"1.1rem"}}>Loss</div>}
          
        </div>
        <div className='deposite-history-div' style={{margin:".7rem 0"}}>
            <div >Type </div>
            { (gameId ==='1')&& <div>1 min</div>}
            { (gameId ==='2')&& <div>3 min</div>}
            { (gameId ==='3')&& <div>5 min</div>}
            { (gameId ==='4')&& <div>10 min</div>}
        </div>
        <div className='deposite-history-div' style={{margin:".7rem 0"}}>
            <div >Time</div>
            {/* <div>{props.data}</div> */}
            <div>{datetime}</div>
        </div>
        <div className='deposite-history-div' style={{margin:".7rem 0"}}>
            <div >Order number</div>
            <div>{orderNo} <ContentCopyIcon style={{height:"1.2rem",marginTop:0}}/></div>
        </div>
        <br></br>
    </div>
    )
}