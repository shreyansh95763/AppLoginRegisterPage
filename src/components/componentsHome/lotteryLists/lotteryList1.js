import { useState } from "react";
import { Navigate } from "react-router-dom";

export const LotteryLists1=()=>{
    const [redirectToWinGo , setRedirectToWinGo] = useState(false);
    const goToWingo=()=>{
        setRedirectToWinGo(true);
    }
    if (redirectToWinGo) {
        return <Navigate to="/AppLoginRegisterPage/WinGo" />;
      }
    return(<>
        <div className="display-flex lotteryList-container">
            <div onClick={goToWingo} style={{cursor:"pointer"}} className="lottery-pics-container" >
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png" />
                <h4>Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} style={{cursor:"pointer"}} className="lottery-pics-container" >
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png" />
                <h4>Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} style={{cursor:"pointer"}} className="lottery-pics-container" >
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png" />
                <h4>Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} style={{cursor:"pointer"}} className="lottery-pics-container" >
                <img alt="lotter-pic" src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png" />
                <h4>Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div onClick={goToWingo} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
        </div>
    </>
    );
}