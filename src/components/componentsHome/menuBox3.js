export const MenuBox3=(props)=>{
    return(
        <>
    <div className="menuBox3-container ">
        <div className="bgColors menuBox3-divs" onClick={()=>props.handleEvents("pvc")}>
            <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061902xb6m.png" />
            <h4>PVC</h4>
        </div>
        <div className="bgColors menuBox3-divs" onClick={()=>props.handleEvents("fishing")}>
        <img alt="img" src="https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061856jkxn.png" />
        <h4>Fishing</h4>
        </div>
    </div>

</>

    );
}