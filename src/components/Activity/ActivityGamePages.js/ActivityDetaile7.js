import { ActivityDetailBody } from "./ActivityDetailBody"
import { HeaderGamePage } from "./HeaderForAllPage"

export const ActivityDetaile7=()=>{
    return(<>
         <HeaderGamePage headingProps="Activity Details" />
         <img className="activity-detail-up-pic" alt="Activit-detail pic " src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20240205200652hdfn.png" />
        <h4 style={{color:"white", textAlign:"center",fontWeight:"660",fontSize:'1.1rem',margin:0,marginTop:".4rem"}}> Banking Tutorial</h4>
        <div className="activity-detail-bottom-pic">
            <img alt="detail-images" src="https://ossimg.bdgadminbdg.com/IndiaBDG/editor/editor_20240205203621utgg.jpg" />
           <img  alt="sect bottom img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/editor/editor_20240205203627fgbo.jpg" />
        </div>
        
    </>)
}