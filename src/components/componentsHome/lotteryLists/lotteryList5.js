import { useState } from "react";
import { Navigate } from "react-router-dom";
export const LotteryLists5=()=>{
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
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
            <div className="lottery-pics-container" onClick={goToWingo} >
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062124qut6.png" />
                <h4>Trx Win Go 3Win</h4>
            </div>
        </div>
    </>
    );
}