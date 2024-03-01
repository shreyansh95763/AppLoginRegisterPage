import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const HeaderAccount=()=>{
    return(<>
         <div className="account-main-heading-section" style={{ background: "linear-gradient(90deg, #C4933F 0%, #FAE59F 100%)",width:"100%",borderBottomLeftRadius:"2rem",borderBottomRightRadius:"2rem"}}>
               <div className='left-header-section'>
                <img alt="account logo header" src="https://bdggame.in/assets/png/1-c7e4efc8.png" />
               </div>
               <div className='right-header-section'>
                    <div className='right-header-div1'>
                        <h5>MEMBERNNGNYSNW</h5>
                        <img alt="name logo" src="https://bdggame.in/assets/png/0-78e1ab02.png" />
                    </div>
                    <div className='right-header-div2'>
                        <p>UID</p>
                        <p>8904875</p>
                        <ContentCopyIcon style={{fontSize:16}} />
                    </div>
                    <div className='right-header-div3'> 
                        <span>Last Login:</span>
                        <span>2024-02-29</span>
                        <span>13:34:01</span>
                    </div>
               </div>
               <div></div>
               <div></div>
            </div>
    </>)
}