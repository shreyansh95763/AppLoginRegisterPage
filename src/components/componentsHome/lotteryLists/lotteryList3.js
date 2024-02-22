import { useState } from "react";
import { Navigate } from "react-router-dom";
export const LotteryLists3=()=>{
    const [redirectToWinGo , setRedirectToWinGo] = useState(false);
    const goToWingo=()=>{
        setRedirectToWinGo(true);
    }
    if (redirectToWinGo) {
        return <Navigate to="/AppLoginRegisterPage/WinGo" />;
      }
    return(<>
        <div className="display-flex lotteryList-container">
            
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>K3 3Min</h4>
            </div>
            
        </div>
    </>
    );
}