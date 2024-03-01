import EventNoteIcon from '@mui/icons-material/EventNote';
export const JackpotBody=()=>{
    return(<>
         <div style={{ color: "#efbb60", background: "transparent",border:"1px solid #efbb60" ,width:"90%",display:"flex",justifyContent:"center"}} className="deposite-amount-button">Recieve in batches</div>
        <div className="jackpot-ruls">
            <div><EventNoteIcon style={{color:"#C4933F"}}/> Rules</div>
            <div> <img style={{width:"2.3rem",height:"2.4rem"}}alt='crown' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/crown-427-964716.png?f=webp&w=256' /> npm rWinning Star</div>
        </div>
        <div className="Jackpot-history">
            <img alt="no-data images" src="https://bdggame.in/assets/png/empty-ea102850.png" />
            <p>You don't have any big jackpot yet,let's bet</p>
        </div>
        <div style={{paddingBottom:"1rem"}}>
        <div className="deposite-amount-button"style={{width:"94%",margin:".5rem .5rem 0 .5rem"}} >Deposit</div>
        </div>
    </>)
}