import { useNavigate } from "react-router-dom";

export const LotteryLists1=()=>{
    const Navigate = useNavigate();
    const goToWingo=()=>{
        return Navigate("WinGo")
    }
      const goTo5DLottery=()=>{
        return Navigate("Lottery-5D")
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
            <div onClick={goTo5DLottery} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goTo5DLottery} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goTo5DLottery} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goTo5DLottery} className="lottery-pics-container" style={{cursor:"pointer"}}>
                <img alt="lotter-pic" src="	https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062111bt8e.png" />
                <h4>5D 10Min</h4>
            </div>
            <div onClick={goTo5DLottery} className="lottery-pics-container" style={{cursor:"pointer"}}>
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