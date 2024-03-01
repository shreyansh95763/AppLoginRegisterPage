import { ActivityRule } from "./GamePage1ActicityRule"
import { GamePage1Body } from "./GamePage1Body"
import { HeaderGamePage } from "./HeaderForAllPage"

export const GamePage1 = () => {
    return (<>
        <HeaderGamePage headingProps="First Deposite Bonus" />
        <div className="game-page-body">
            <GamePage1Body deposite="200000" receive="10,000" />
            <GamePage1Body deposite="100000" receive="5,000" />
            <GamePage1Body deposite="30000" receive="2,000" />
            <GamePage1Body deposite="10000" receive="600" />
            <GamePage1Body deposite="3000" receive="300" />
            <GamePage1Body deposite="1000" receive="150" />
            <GamePage1Body deposite="300" receive="60" />
            <GamePage1Body deposite="100" receive="20" />

        </div>
        <ActivityRule />
    </>)
}