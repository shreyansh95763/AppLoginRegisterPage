import { useNavigate } from "react-router-dom";
// import { StackActions } from '@react-navigation/native';

export const HeaderBalance = () => {
    const navigate = useNavigate();
    const navToWithdraw = () => {
        return navigate("Withdraw");
    }
    const navToDeposite = () => {
        return navigate("Deposite");
    }
    const navToWallet=()=>{
        
        return navigate("/AppLoginRegisterPage/Wallet");
    }
    const navToVIP=()=>{
        return navigate("/AppLoginRegisterPage/Account/VIP")
    }
    return (<>
        <div className="balance-container">
            <div style={{fontSize:"1rem", margin:".7rem 0 .5rem 1rem"}}>Total Balance</div>
            <div style={{fontSize:"1.3rem", fontWeight:"550", margin:"0 0 0 1rem"}}>{'₹'}0.00</div>
            <hr style={{height:"2px"}}></hr>
            <div className="items-transfer-container">
                <div className="items-transfer" onClick={navToWallet}>
                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANzSURBVHgB7ZpNTxNRFIbfM/2gFCRFjJrAohgJYQHqTleUX0CNuoelO/sLgF+giQuXuDSKobg31MREjFEqMXxIAmPERDbYFAto27neW9LUkJl2ptMZ5pJ5klmUOTczD+d+HDgFfHx8fHx8PAOZDVyeTcQK+5ggYqOM4TrsQMjxB6tgtKCEkLl1P6PCJRoKH4tqUyB6AIdQiD36U1RmxlKZHBymrvC7J4l4ucwWwRCH82+iBgI05nS2DYUrmS2wZVdka2+jFot0w8lMK0Y3Dgp46KqsgD8vGIRjS0egm+HKVC6xbZwOuWKJ+p3Ksm6GSyVnf8sNiLUFkYBD6AqLoweniEbOLSXdKf328SjTDVYI4XAQgWCAX4bL3zaBgJINt4Wy1c9Mwzf+ptnBu+k0bGJKWIhGO9oQ4ZdCpmsVJ8jxx6fLCs0M3U6raIKGaQrxjHZfOIdoZ+S0ZQUxXuVNKBpb/Po82VS1V1e4LRJCrKdTTDF4Cn58MYUtr71IJmARQxMh2RmLwsvwknR+bT4ZtzTG6EZHV7sXpnAjYoEym7UyQFdYrFsxnWWA764JK1NbVzgSDUMmiLSk2Vhd4SA/Z2WCQKYLJX3hkFzCnLjZQI+dN00TMxsYhE2WXr/H3u4e7NB3pRcjN0fgBrYy/PP7rm1Zwc7Wj8rlBraEQ+HWHV3Rjna4gW5lsTE3zmCSSna27WXnct9FxAfjpmLzv/JY/bSG/N4+SsWifhBRBiGaTD07Uk/esr2GxfoTlxvsbO1gZWmF/yeE6m9SjCVQhKjAxk7ekmaXPigcYvXjOhrKVhHSOkgjrK6rxlPYAtII53N5tAJphEt/S2gF0gh3dXehFUgj3NvfmpNAGuGeS+cxMDxgYQSpej+1fQ67ycDwVbTzimzzyyYOfx/WC82BWErvhlTCgmqhIyqu/zeypcUPtSKjFMmm0jndVo10wlVObmKpuaNM7dOR4biz8vewaXzhs46RsAq5yJoNNBCmN5AIIrInrDE8hUTwBtuC2VjDXsrGy/Ft17/j0QwEdfDOQr/ZcMNNS9NoEhJg9T0NhYfupTMaoxl4GI2xGfGeVsY0bA/yRtU0b0tOwWMcy76ahkVM9UNFD1Z03b2wpnkfKVNmsJzZ2ngLiLYkbxkn+Tq4xsDicAkuqWrAZ74bp5sV9fHx8fHx8SD/AE8+EexaAYetAAAAAElFTkSuQmCC" />
                    <div style={{color:"#d9ac4f",fontSize:"1rem"}}>Wallet</div>
                </div>
                <div className="items-transfer" onClick={navToDeposite}>
                    <img alt="img" src="https://bdggame.in/assets/png/rechargeIcon-c2eb6382.png" />
                    <div style={{color:"#d9ac4f",fontSize:"1rem"}}>Deposite</div>
                </div>
                <div className="items-transfer" onClick={navToWithdraw}>
                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKgSURBVHgB7ZrPbxJBFMe/M/wQqmnw5kHjYmyQg4me9Ajx4smCP87tv8Bf0PAXEP8C6c2DttujJ/kHjCSNYsTYPdiDJtZNkxbTZXecRYNNeTsshAZ2M5+EMHnvzWS/mffmkVkAjUaj0Wg084JhQhqVXA78qCKHOTk9h3nB0EaKt2svf1uTTQtJ42mmBCE25KeERYKxFoS3WdtymqHCxwUMdjRx/AICFSwyDE254/VxO64U3KhkDHDvrRwaiAYW0rysEs2V06Ml1seA422rAhJBjsbj9Ib8Wuw0prnysJhgbzpui3KSKf0vlfcQXWx4S/maadtnHXRKc7eEaCNbZ2+dctCCGV9D1GFYpcy0YCHuIOoIYVDmoFN6fr+gZodBGdVtKYZowXEnSRlXbq8gFmx9GDEFCL6JeDAqWNdw3NGC444WHHe04LijBccdLTjuaMFxR18AhMFx+rA+7eH4qDfiS6VTMAoGli5mh7bubpeMpaDmz5KpBHfefcS3r/uB/sNfh7j/4N5g7Md1d79gEvblnPKjEpLpqR5PyVQp/fP7gdLfP+kPxwc/1LEUzomD8yJIsAUFxi0j0JeUKXn6isgoXEf20mTp6a8/g921KSO5KgOzBOibe5+8rLFrN66SO+HXYDL1f9nly8uD9OyFrGGf7AzqV74lbFN2UrDHsMMESlDgizotbBzZczqEgnAZ26TsZEpf4GgiICUiA0eLNhPkq6YNwZ4jonhC1ItV06J8yv94fH61+l4A0XqTyGAVnuzkg9zKtuQmWNVfAFFBPqvHWVkVohTsp8XfBegDYKFgzExzdjcolYdhCEnndWU9IbAm21UJC4RsoS1XoF58ZrbCxU9IZ7ticFfWtZhfbQsOW7iwMymYgwNWo9FoNBpNJPgDNMGzUq2rkHsAAAAASUVORK5CYII=" />
                    <div style={{color:"#d9ac4f",fontSize:"1rem"}}>Withdraw</div>
                </div>
                <div className="items-transfer"onClick={navToVIP}>
                    <img alt="img" src="https://bdggame.in/assets/png/VipIcon-1bb97a71.png" />
                    <div style={{color:"#d9ac4f",fontSize:"1rem"}}>VIP</div>
                </div>
            </div>
        </div>
    </>)
}