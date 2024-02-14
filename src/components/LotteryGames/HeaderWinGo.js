import { MainHeaderWinGo } from './MainHeaderWinGo';
export const HeaderWinGo = () => {
    return (<>
        <MainHeaderWinGo />
        <div className="header-section win-go-header">
            <div className='balance-section'>
                <div>
                    <img alt='wallet-logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgB7ZkxS8NAFMf/KWJB7KKdpFonXSyITroIiltnv4iro6ufQVwd3EUKTm4BBxc7GSi62Kmi2KW+RxKN1zRpk7xLAveDx931pfD+ubv3khxgMBgMeWJNcoxGoyo1TbI62Tz0MCBzLMt6n/YPoQIo+HVqDsiqyIcumU1CBnEXjgmg4FvU7CF/OPgbEvEddVElOKDga9TsoBhMFUtFGW8hv2UTRsvbixNRBdRRPJpRTlXAIkpGBSWn9ALmoIcFsgbZBmbfZzXayDa1XNwctTZIC+DAj8gOvX4SnuHWBBbPWekuWKkll9Ay2RlZG8mDV+HacBz8QUoAB3/qtVnDS2rFH0gJ4LsuEbzPb7qXEMBrdR+akBAwzYPgJzJCIgutRfgeya7gCuDsdIKUSMxAI8J3jb+734H73J8K3ZX4SxmnXkoSAqKCagf6nKW2kRKJPdCDm4nC4HW/6fWXkAESM9CJ8Tc8y6Q6SwjgTNODJqQ28SUyzPUhfPgdKQE8AxeQETEk6/sDyTTKIs6RQa5XsIOfWqTfB/hO8UxwVuKUuYrZccjeyDjoJwr+NejU9UbWRfKZuKegJ/7XvNTnTRkEDKOcqoAXFI9+lFMV4KBYOHGf2P8J8FKUjWLA1fYh7qKxPUAiWEDeIjj420QHHD7eWcEu3Od2XUdMvN65aHXjDjYMBoOhGPwAT6Fln/zlO14AAAAASUVORK5CYII=" />
                    <h5>Wallet Balance</h5>
                </div>
                <h5 className='balances'>{'₹'}00.00</h5>
            </div>
            <div className='deposite-section'>
                <div className='deposite'>Deposite</div>
                <div className='withdraw'>Withdraw</div>
            </div>
        </div>
        
    </>)
}