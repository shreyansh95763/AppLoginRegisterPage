import GameList from "./ActivityGameList.json"
export const ActivityGameSection=()=>{
    return(<>
        {
            GameList.lists.map((val)=>(
    <div className="game-list-div">
                <>
                <img alt="games-images" src={val.image} />
                <h5>{val.name}</h5>
                </>
    </div>
            ))
        }

    </>)
}