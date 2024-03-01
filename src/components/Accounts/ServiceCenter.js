export const ServiceCenter = () => {
    return (<>
        <div className="service-center-container">
            <h5>Service Center</h5>
            <div className="sevice-center-opration-container">
                <div className="service-center-divs">
                    <img alt="service images" src="https://bdggame.in/assets/png/settingCenter-d46ac1a5.png" />
                    <p>Setting</p>
                </div>
                <div className="service-center-divs">
                    <img alt="service images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7dpNTxNBGAfw/2xbYkGxhUgPFlMMBmpASIyRmyXecYlwpnwC4RMUvoDIJxBuJkisfAFL4sGLgWgiEhKopgY5SHoxoNB9nCExviR0ZsvTV/aXkCbtdHb/3dnZZ5cBPB6Pp44IlMHc2IUEiFIgZ1BuIuTqy6A8hLWOgJicfnaYBTP2wI8fBiYEiQUwsISVfLR8uAhGrIHn7AsxWIU190f1VHk4zV3T6XweTCxwsgoJxrBKCNZBEozOdIS3luwELOeeQ0Keqxhce70e2v28yxkY17o78313+rJCIE8kVh0/FuKj6SxKVFJgFZQEpQhI/P3+uzfvkdvOgVP0ehS3hvr/eU/udKbgE5OlBHc9pLeW7ZQj6NX/YStJbdsq0M7W8kgKLrkKfBKWaOa0z/0BP7j5m07vU55KM25DGwfWhVVaw63g1n6lvejnKvTHJXsKhowCb7ywY7qwSiTageDFILioviKdHdp2QtCc2kcYMArsc8ho2ASaAhi6f5cltOpD9WXKV6CnJu20s7T65dQEARcOvh/g294+cjtf4FZAzgPq1OjqjbmeE5p8Itw1mi5apGh79DlIENwJtgTl5eTqyV8l/ThGUr48KdZGO6QJ9AB1wrIwoG2jayBvBFgrp3JyHIR1bXhr6SqzBF3WtsE54wVudF7gRucFbnSsN7D7sn5WdTSHcKQNzS18d16/sQX+8HYD2c0suKg7r+GRRNEHAKVgG9J7uT1wOvp5hK/MfSpsgdXDNk5+eYTb5bDmxjZebvR3ozV0CcdHx+AQ6YyU5xkZGKmdrHXedbjReYEbXVUrLfWwr60Ml55iql5p3bwdR6wnhkqpeqWV23b/7Posql5pRaKVvXZXtdKq63NY8SqtGmTwrxZ8Qr0QIqtrog8ssI46UQBWdW30gS2kUS8sZPRNNNRKGQGRQY1TK3tMVvUYTVoFwixqnFrGZNLOKHB8PJ0hiHnUKIdo1nTNlquFaZtLIwtyJpxADZFhF+PjK0nT9q6uwz2y41o60gSadxNWcV149I6lpxwhzxeBLKpFbtshMdw7tmK8PuvPV89g87ltyxdbdjIgf+1BlI9amZOXo+slEdJqToHH4/GcB78AlDYBdwiSx+kAAAAASUVORK5CYII=" />
                    <p>Feedback</p>
                </div>
                <div className="service-center-divs">
                    <img alt="service images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgB7ZrPThNBHMe/s6W1CDEVDhzsYSFqw8FET3pziQ9AayHxYoJPIDwB8ASLTwDeTDTp8gTUN+BGlAN7aEQOkB74o5TO+JvyR2Jk/8DszobMJ2laZhbCJ7/fzP5+0wUMBoPBYMgMDBlhq1G1Ox04PIcS4yj9O8+B5vi018QN6YNGNj9XHWHxSSHYzHFXlGBRBAT+GwZL9AabuCFahHuiTMxzCAci3SRLVXiD0jbXFcs9UU2kJvy9UX0quGhQxtrQiIUU+PalWhVdsQahV1aSuLCMLCCW6WMJGSBRYblmZRojI7KS0DXsVkt0uzh8T1GapftFrH/8x2YL5bEHyBLhm1buqEFrz4lbo5THypmTlQQKu1NFB5w7uAaPnjyESrZb2y/d14WFiwGGdeSt9blPv3zEIDjC15QdGhlG/0A/VLLf3nfozbkYkBXZMYdbL6yQ+GJU8UQ2rfJoiqksMEPia+6boh3l8kSEh0eGkDJ2T1pusCEoF753/57ydI6IjdyhG3aRcuG7g1pkT6H0DouycuHigEZhiXVQDZyGYvL5PPTC7KDZVJqHLKFcuEPnNFqRBUkAyoVPjk+gFaq+gqaVHwDs7uxCF4xhZTak4lIe4aODI01RZr6gEjPsqkQ2rdZWC+nCfBTYRJR6OhHhn60dpIVMY/D+Z1Gbh+A1bFlN6pjmEZO9nT1ay3tKa+rB0mCT3r7+HRE++IA367Xb1DZF/TPhXb1bv0OHb/GPVYdI9sWr51CGYIuVaW8BNyQ8pbu/ayT8obdOYnAe5awRelua80Ap06HzLMgXHblOirDfqUyt9jJn4+2wDZ6N49lzEi0tx2uezyxWo49tZITEa+nHNY8qH/YOGZFOpXmoTHkey7EJ2iJ9aCa1bklGmlskDfYRGkm1PZRrmqI9wxmluKZoa+mHx+veSqW+OsrFWcRTlNf6BMDZIwzydfp1ahc2fT9uX/XIAxSgVfgyp7t5cPOuAnPEc9sxwrcdI3zbMcIR8ANnM9AgBBFfWAQX/5wLrc1BGLGFC31YYldXROvFPmsJGSa28GjNa+ept6XCf/FS+vry5wKNy3kYDAaDQQ1/ABGJBbxfrJa5AAAAAElFTkSuQmCC" />
                    <p>Notification</p>
                </div>
                <div className="service-center-divs">
                    <img alt="service images" src="https://bdggame.in/assets/png/serviceCenter-b92936b9.png" />
                    <p>24/7 Customer</p>
                    <p>Service</p>
                </div>
                <div className="service-center-divs">
                    <img alt="service images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANuSURBVHgB7ZpNTxNBGMf/s32xSCTVAycP24ukXkQ5G9ebcnF5S4gXyyeQfgLsJ1j5BLY3I4iFs4nLkYNSQyJCjV0TDnIhe6EQ2u440wYDZbfdbUvZlvklG9KdZ6G/eZ6ZXdoHEAgEAoF/Ic0CtNmIjJOKAkJMEMlEOZJLZk0TPqDwSY2WSpCpBFmiMMtBGPGJrNHoGkdhTWWiAfoOlCo2wwabgByotY5AWE8uHebQBXY/qKNWAIoEPKC19yXXxxCCdEUiKSdxW2FNjUYhFTftfqEDbAKgswrIJJePdXSQ/JKqUMl6QSlJsJdRVxcRGGGJPIxNZM2LQzZokyGNDc2jNWryUmix1cy3JFkPpamRmbU39afthafCm6AYRbsQorOyzyRXSmk34TvLqkpAX1NAQfsYI9OrsfqTDhkOU3QWg015ykl896OaoKALbJJldBAmfMGvW8KnGAhLT5Pvjw3+olq6hC50KKMXsBMOoruwW5xV0KZu6OOzz6IWoe0vG490W7gGv6U0fQK4HCRcM4Rwv3PthD1vWkN3hhC7JzuO/93bxz47/Ipn4bHHjzAwOOA4Pnx3GF/WDlA+KcGPeCppLtpIlhMKhzB0+xb8iifho8Mj5LfyDWP2fu/hYP8AfsVzSee3fqHw8w/LpP2lfFL8TEtPWmX2MQM/ehFxW3LDwODNpjFHh0X4Ec/C98fikEfkpnGFHQPbX7fhNzyVNL/luJHlxFhcs1vYVeB5DRdd7sI8zo87tqeSLrGnp43PG9Xs8Ww3iuMl7Uc8r2GetR/f/Lc23SL+Pex3hHC/I4T7HSHc7wjhfsdJ2Bc9HG1i62AvzPs3ehxKybrdeSfhFHocGoRty4atcK0xRZpDj2IRMufUxeO4aSVXjtOwpBgoMoSAl7if17VJQHIUZNEKkFh8Kpt2CvT0tbQ2Expl0yezQyHS/16plhh/+RwtUpWzgO/szetWALlmzWhnaet7+Go/V6CowILK1v0TtnJkt9d6FDZY9lYpRTYSRM6u/8otHW08qFZAmcy7kXchbFiUZNhPPT6T1dEhLq3TQpuOKKhYCfYXXtmNOwibLJMZnslOSp7l0ltLqj2bUkVh++PC2ayfEyYsmxbJsHJ92065uqGrvTTaZChxKl4V5qIgqUa7al/Ay317SVUgEAgEAsE5/gFBJzYbmTEiCwAAAABJRU5ErkJggg==" />
                    <p>Beginner's Guide</p>
                </div>
                <div className="service-center-divs">
                    <img alt="service images" src="https://bdggame.in/assets/png/about-38aa0cd6.png" />
                    <p>About us</p>
                </div>
            </div>
        </div>
        <div className="weekly-tasks-five-div logout" style={{color:"#d9ac4f",border:"1px solid #d9ac4f",margin:"2rem auto",background:"transparent"}}><img alt="logout" src="https://bdggame.in/assets/png/logout-3fc8c261.png" /> Log out</div>
    </>)
}