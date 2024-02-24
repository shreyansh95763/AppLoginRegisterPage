import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (<><div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}} >
    <Card sx={{height:"14rem", maxWidth: "96%",background:"#404040" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://bdggame.in/assets/png/signInBanner-c7e3b971.png"
          alt="green iguana"
        />
          <h5 style={{color:"#d9ac4f" ,marginLeft:".8rem",fontSize:"1.15rem",fontWeight:"550"}}>
            Gifts
          </h5>
          <p style={{color:"#a6a9ae",fontSize:".8rem",marginLeft:".8rem"}}>Enter the redemption code to receive gift rewards</p>
      </CardActionArea>
    </Card>
    <Card sx={{ height:"14rem",maxWidth: "96%",background:"#404040" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://bdggame.in/assets/png/giftRedeem-6dad7105.png"
          alt="green iguana"
        />
        {/* <CardContent > */}
          <h5 style={{color:"#d9ac4f",marginLeft:".8rem",fontSize:"1.15rem",fontWeight:"550"}}>
        Attendence bonus
          </h5>
          <p style={{color:"#a6a9ae",fontSize:".75rem",marginLeft:".8rem"}}>The more consecutive days you sign in, the higher the reward will be.</p>
        {/* </CardContent> */}
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}