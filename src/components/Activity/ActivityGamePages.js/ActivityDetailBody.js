export const ActivityDetailBody=(props)=>{
    return(<>
        <img className="activity-detail-up-pic" alt="Activit-detail pic " src={props.imgs} />
        <h4 style={{color:"white", textAlign:"center",fontWeight:"660",fontSize:'1.1rem',margin:0,marginTop:".4rem"}}> {props.heading}</h4>
        <div className="activity-detail-bottom-pic">
            <img alt="detail-images" src={props.imgs2} />
        </div>
    </>)
}