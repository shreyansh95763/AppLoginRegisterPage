import { useNavigate } from "react-router-dom"
export const WalletTransferView=()=>{
    const navigate = useNavigate();
    const navToWithdraw=()=>{
        return navigate("Withdraw")
    }
    const navToDeposite=()=>{
        return navigate("Deposite")
    }

    return(<>
        <div className="wallet-transfer-view-container">
            <div className="wallet-percentage">
                <div className="main-wallet-percentage">
                    <div>0%</div>
                    <h5>{'₹'}0.00</h5>
                    <p>Main Wallet</p>
                </div>
                <div className="main-wallet-percentage">
                    <div>0%</div>
                    <h5>{'₹'}0.00</h5>
                    <p>3rd Party Wallet</p>
                </div>
            </div>
            <div className="deposite-amount-button" style={{width:"94%",fontFamily:"inter",fontWeight:"550"}} >Main Wallet transfer</div>
            <div className="items-transfer-container">
                <div className="items-transfer" onClick={navToDeposite}>
                    <img alt="img" src="https://bdggame.in/assets/png/rechargeIcon-c2eb6382.png" />
                    <div>Deposite</div>
                </div>
                <div className="items-transfer" onClick={navToWithdraw}>
                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKgSURBVHgB7ZrPbxJBFMe/M/wQqmnw5kHjYmyQg4me9Ajx4smCP87tv8Bf0PAXEP8C6c2DttujJ/kHjCSNYsTYPdiDJtZNkxbTZXecRYNNeTsshAZ2M5+EMHnvzWS/mffmkVkAjUaj0Wg084JhQhqVXA78qCKHOTk9h3nB0EaKt2svf1uTTQtJ42mmBCE25KeERYKxFoS3WdtymqHCxwUMdjRx/AICFSwyDE254/VxO64U3KhkDHDvrRwaiAYW0rysEs2V06Ml1seA422rAhJBjsbj9Ib8Wuw0prnysJhgbzpui3KSKf0vlfcQXWx4S/maadtnHXRKc7eEaCNbZ2+dctCCGV9D1GFYpcy0YCHuIOoIYVDmoFN6fr+gZodBGdVtKYZowXEnSRlXbq8gFmx9GDEFCL6JeDAqWNdw3NGC444WHHe04LijBccdLTjuaMFxR18AhMFx+rA+7eH4qDfiS6VTMAoGli5mh7bubpeMpaDmz5KpBHfefcS3r/uB/sNfh7j/4N5g7Md1d79gEvblnPKjEpLpqR5PyVQp/fP7gdLfP+kPxwc/1LEUzomD8yJIsAUFxi0j0JeUKXn6isgoXEf20mTp6a8/g921KSO5KgOzBOibe5+8rLFrN66SO+HXYDL1f9nly8uD9OyFrGGf7AzqV74lbFN2UrDHsMMESlDgizotbBzZczqEgnAZ26TsZEpf4GgiICUiA0eLNhPkq6YNwZ4jonhC1ItV06J8yv94fH61+l4A0XqTyGAVnuzkg9zKtuQmWNVfAFFBPqvHWVkVohTsp8XfBegDYKFgzExzdjcolYdhCEnndWU9IbAm21UJC4RsoS1XoF58ZrbCxU9IZ7ticFfWtZhfbQsOW7iwMymYgwNWo9FoNBpNJPgDNMGzUq2rkHsAAAAASUVORK5CYII=" />
                    <div>Withdraw</div>
                </div>
                <div className="items-transfer">
                    <img alt="img" src="https://bdggame.in/assets/png/rechargeHistory-a584338d.png" />
                    <div>Deposite</div>
                    <div>Histoy</div>
                </div>
                <div className="items-transfer">
                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7dpNTxNBGAfw/2xbYkGxhUgPFlMMBmpASIyRmyXecYlwpnwC4RMUvoDIJxBuJkisfAFL4sGLgWgiEhKopgY5SHoxoNB9nCExviR0ZsvTV/aXkCbtdHb/3dnZZ5cBPB6Pp44IlMHc2IUEiFIgZ1BuIuTqy6A8hLWOgJicfnaYBTP2wI8fBiYEiQUwsISVfLR8uAhGrIHn7AsxWIU190f1VHk4zV3T6XweTCxwsgoJxrBKCNZBEozOdIS3luwELOeeQ0Keqxhce70e2v28yxkY17o78313+rJCIE8kVh0/FuKj6SxKVFJgFZQEpQhI/P3+uzfvkdvOgVP0ehS3hvr/eU/udKbgE5OlBHc9pLeW7ZQj6NX/YStJbdsq0M7W8kgKLrkKfBKWaOa0z/0BP7j5m07vU55KM25DGwfWhVVaw63g1n6lvejnKvTHJXsKhowCb7ywY7qwSiTageDFILioviKdHdp2QtCc2kcYMArsc8ho2ASaAhi6f5cltOpD9WXKV6CnJu20s7T65dQEARcOvh/g294+cjtf4FZAzgPq1OjqjbmeE5p8Itw1mi5apGh79DlIENwJtgTl5eTqyV8l/ThGUr48KdZGO6QJ9AB1wrIwoG2jayBvBFgrp3JyHIR1bXhr6SqzBF3WtsE54wVudF7gRucFbnSsN7D7sn5WdTSHcKQNzS18d16/sQX+8HYD2c0suKg7r+GRRNEHAKVgG9J7uT1wOvp5hK/MfSpsgdXDNk5+eYTb5bDmxjZebvR3ozV0CcdHx+AQ6YyU5xkZGKmdrHXedbjReYEbXVUrLfWwr60Ml55iql5p3bwdR6wnhkqpeqWV23b/7Posql5pRaKVvXZXtdKq63NY8SqtGmTwrxZ8Qr0QIqtrog8ssI46UQBWdW30gS2kUS8sZPRNNNRKGQGRQY1TK3tMVvUYTVoFwixqnFrGZNLOKHB8PJ0hiHnUKIdo1nTNlquFaZtLIwtyJpxADZFhF+PjK0nT9q6uwz2y41o60gSadxNWcV149I6lpxwhzxeBLKpFbtshMdw7tmK8PuvPV89g87ltyxdbdjIgf+1BlI9amZOXo+slEdJqToHH4/GcB78AlDYBdwiSx+kAAAAASUVORK5CYII=" />
                    <div>Withdraw </div>
                    <div>Histoy</div>
                </div>
            </div>
        </div>
    </>)
}