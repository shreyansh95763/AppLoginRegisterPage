import { useNavigate } from "react-router-dom"
export const AddBank=(props)=>{
    const navigate = useNavigate();
    const navToAddBank=()=>{
        return navigate("Add-bank");
    }
    return(<>
         <div className="channel-container add-bank" onClick={navToAddBank}>
            <img  alt="Add bank logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAM1BMVEUAAAC3u8+4vNC5vNC5vdG4vNC3us+3t8+4vNC2vM+5vNG4vM+vv8+vr8+5vNC4vNC4vNB5o5b1AAAAEHRSTlMAQN/vj59gIM+QX5AQEK+/+pPJwgAAAbpJREFUeNrt3MuSokAQRuGsKkS8/+//tMPEbCYygDCbjs7CPt8a5QjKAos0AAAAAMAHKsPUtGywRdeV7evVFg1aMZ3OFvV4akOxJVUrmi0p2hBNPlfFg5tW1Hiw6vkbey+2aFx5VRtt0W27+B4IPmk2lYelePz75M/AAdbsZIlOmpXQ5tVSvdw3b9skabRURdJk79Lsbqnukloo2BL4BoL/QzDBDsEEOwQT7BBMsEMwwQ7BBDsEf3bwTbpYonhDKZauhwb84hM6SIMdSQ8XRoK7QrBDMMEOwQQ7BBPsEEzwtmur18TgeEOVWkawb9i/u17fgWCCCSa4q90RvGzQDsPPBxftUgh+41+THS786AgmmGCC+9ndLwxuUk0MjjeMtY0JwbGGQ9+qIrh/BDsEE+wQTLBDMMEOwQR/0aHWeH/2clwc4ISWcqz11X8bDnVR+uwnZQgmmGCCCSaYYIdggh2CCXYIJtghONTQ+hgjqdCgzmKpxtCgzpukl6WqoemxpY9hs2d721OzOmaN8y2v6BG7Vzk/MEN774jnhBnavjdUfMqdof18mFk0eUqaod2mSwc31AEAAAAA3+4PU1FviV2McX8AAAAASUVORK5CYII=" />
            <h5>{props.text}</h5>
         </div>
         <p style={{color: "#d9ac4f",margin:"1rem auto", fontSize:".75rem",textAlign:"center"}}>Need to add beneficiary information to be able to withdraw money</p>
    </>)
}