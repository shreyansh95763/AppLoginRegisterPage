import { useBalance } from "../../../redux/store"
export const HeaderGoldenContainer=({color,name})=>{
    const bals = useBalance();
    return(<>
        <div className="header-section win-go-header payment-gold-card">
            <div className='balance-section'>
                <div>
                    <img alt='wallet-logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAD/sjH/zRj/zR//1zbuR0f/zBb/zRf/zhr/zRn/+HfuSUn/zBn/+njvSUn/zCH/+Xf/+XX/+HT/+nj/zBn/zRr/pSL/20H/2T3/1Db/zBf/30j/1zn/7mP/8Gb/3UT/9nL/9W//8mn/82z/7GDuSEj/+Xf/0zP/5lX/5FL/4Uz/6Vv/6Fj/40//613/+HT/vTT/2033kj3/xzz+yzX/rSj/sSr/0kH/sSz/rym/OY7sAAAAFnRSTlMAIsBCE+/v3IFxkZGRgYEy7+/v7rBhR1ORgAAAAh9JREFUWMPtkuly2jAQgA3hyJ2e1BKyMYGC7dbYXEn6/i/W1QqNughsI03+dPIh7SXzDSMcfPD/czXsQfTmqcv5tb+md88lHV/PzYAjXd/L4ZorD02nyw1D98u55oQb98uhDHpOl9PlFvcOl/ONn+Lp4ssZWA6XV+D70DI0vwIPnxZOfL2lnttFA6VV6vqBiL6UNouyFZ+JKDlNWSY1HA6pyB0qmgIJbJOxSnAnZowBk4GK3KGimWI6lcEs7LDChP3hMQMVuUNFz4rZIet2Rqa6PJpSkROxLYrj5xi3A1Rk8BZFcSQXFpoYw+FAT2IcmIeIKHKHiubRfC43xkguDIAa6KkeSXSkIg+IaDVfwWi1khtrALKu1AEs1aisayq6gPV2PyJ0AsOv1qSVMfiI0rdRreh3W6pRa1Gqc0pHyHrUIErboS5om63ffEUv8L0K8vqcKCOk2Tn2UiSLelEz8hft8yzbnhMVRZHBByKEGvCO9ltI50R5cZLj+WvTv5YXuYE2lKpJ1JbxS71onI81WJGGVlW96AJeqz81Ig+Cf5l48D6iH8gEtiomWE90g6VusMOEWCJnbFGIERMl1DmUoVYUevBOIiFECAFPhGyELDDgR00EgqXujkTCAyJiMGAQIApmSgOjpQ7MEl2KMCUR7ZgzOyLasCVjyyUsCTMBUYeqx83wXLEhov5mt3Rit+kT0eNPZ+4Cwl3fTdN/DD5oy19QoJEcy1l/8AAAAABJRU5ErkJggg==" />
                    <h5>{name}</h5>
                </div> 
                <h5 className='balances' style={{fontSize:'1.7rem',marginTop:".8rem",color:{color}}}>{'₹'}{bals.deposite}.00</h5>
            </div>
            <img className="aluminium-portion" alt="aluminium portion" src="https://bdggame.in/assets/png/cip-7e500e5e.png" />
        </div>
    </>)
}