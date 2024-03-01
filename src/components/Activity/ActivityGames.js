import GameList from "./ActivityGameList.json"
import { useNavigate } from "react-router-dom";

export const ActivityGameSection = () => {
    const navigate = useNavigate(); // Change to useNavigate

    const navToGamePage = (id) => {
        if (id === "game1") {
            navigate("/AppLoginRegisterPage/Activity/FirstRecharge"); // Use navigate instead of history.push
        }
        else if(id === "game2"){
            navigate("/AppLoginRegisterPage/Activity/ActivityDetail2"); // Use navigate instead of history.push
        }
        else if(id === "game3"){
            navigate("/AppLoginRegisterPage/Activity/ActivityDetail3"); // Use navigate instead of history.push
        }
        else if(id === "game4"){
            navigate("/AppLoginRegisterPage/Account/VIP"); // Use navigate instead of history.push
        }
        else if(id === "game5"){
            navigate("/AppLoginRegisterPage/Activity/ActivityDetail5"); // Use navigate instead of history.push
        }
        else if(id === "game6"){
            navigate("/AppLoginRegisterPage/Activity/ActivityDetail6"); // Use navigate instead of history.push
        }
        else if(id === "game7"){
            navigate("/AppLoginRegisterPage/Activity/ActivityDetail7"); // Use navigate instead of history.push
        }
    };
    return (<>
        {
            GameList.lists.map((val) => (
                <div className="game-list-div" onClick={()=>navToGamePage(val.id)} >
                    <img alt="games-images" src={val.image} />
                    <h5>{val.name}</h5>
                </div>
            ))
        }

    </>)
}