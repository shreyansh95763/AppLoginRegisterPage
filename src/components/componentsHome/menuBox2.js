export const MenuBox2=(props)=>{
    return(
    <>
    <div className="menuBox2 display-flex bgColors">
        <div className="menuBox2-divs" onClick={()=>props.handleEvents("sports")}>
            <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061915xrqy.png" />
            <h4>Sports</h4>
        </div>
        <div className="menuBox2-divs" onClick={()=>props.handleEvents("popular")}>
        <img alt="img" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619464x51.png" />
        <h4>Popular</h4>
        </div>
        <div className="menuBox2-divs" onClick={()=>props.handleEvents("casino")}>
        <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061909hwqs.png" />
        <h4>Casino</h4>
        </div>
    </div>
</>
    );
}