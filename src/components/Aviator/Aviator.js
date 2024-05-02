import React, { useRef, useEffect } from "react";
import AviatorImg from "../../Assets/aviator.png";
import Chakri from "../../Assets/chakra.png";
import Marquee from "react-fast-marquee";

export const Aviator = () => {
  const helicopterRef = useRef(null);
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const helicopter = helicopterRef.current;
  //   const canvas = canvasRef.current;

  //   if (!helicopter || !canvas) return;

  //   const container = helicopter.parentElement;
  //   const containerRect = container.getBoundingClientRect();

  //   canvas.width = containerRect.width;
  //   canvas.height = containerRect.height;

  //   const ctx = canvas.getContext("2d"); // Define 'ctx' here

  //   const rect = helicopter.getBoundingClientRect();
  //   const helicopterX = rect.left + rect.width / 2 - containerRect.left + window.scrollX;
  //   const helicopterY = rect.top + rect.height / 2 - containerRect.top + window.scrollY;

  //   let prevX = helicopterX;
  //   let prevY = helicopterY;

  //   let a = prevX;
  //   let b = prevY;

  //   const drawLine = () => {
  //     const rect = helicopter.getBoundingClientRect();
  //     const helicopterX = rect.left + rect.width / 2 - containerRect.left + window.scrollX;
  //     const helicopterY = rect.top + rect.height / 2 - containerRect.top + window.scrollY;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     ctx.beginPath();
  //     ctx.moveTo(a, b); 
  //     var cpy;
  //     if(helicopterY<=b-a){
  //       cpy=b
  //     }
  //     else{
  //       cpy= b;
  //     }
  //     ctx.quadraticCurveTo(helicopterX - a*2, cpy, helicopterX, helicopterY);
  //     ctx.strokeStyle = "red";

  //     const rectWidth = Math.abs(helicopterX - a);
  //     const rectHeight = canvas.height - helicopterY;
  //     const rectX = Math.min(prevX, helicopterX);
  //     const rectY = Math.min(prevY, helicopterY);

  //     ctx.lineTo(helicopterX, b);
  //     ctx.moveTo(a, b);
  //     ctx.lineTo(prevX, b);
  //     ctx.closePath();
  //     ctx.fillStyle = "#9a3434a2";
  //     ctx.fill();

  //     // ctx.strokeStyle = "#8e3c3c8b";
  //     ctx.lineWidth = 2;
  //     ctx.stroke();
  //     if (helicopterX === a) {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     }

  //     prevX = helicopterX;
  //     prevY = helicopterY;

  //     requestAnimationFrame(drawLine);
  //   };

  //   drawLine();
  //   const clearCanvasInterval = setInterval(() => {
  //     console.log("ajjfkajlk");
  //   }, 20000); // Clear the canvas every 20 seconds

  //   return () => {
  //     clearInterval(clearCanvasInterval);
  //   };
  // }, []);

  useEffect(() => {
    const helicopter = helicopterRef.current;
    const canvas = canvasRef.current;

    if (!helicopter || !canvas) return;

    const container = helicopter.parentElement;
    const containerRect = container.getBoundingClientRect();

    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const ctx = canvas.getContext("2d"); // Define 'ctx' here

    const rect = helicopter.getBoundingClientRect();
    const helicopterX =
      rect.left + rect.width / 2 - containerRect.left + window.scrollX;
    const helicopterY =
      rect.top + rect.height / 2 - containerRect.top + window.scrollY;

    let prevX = helicopterX;
    let prevY = helicopterY;

    let a = prevX;
    let b = prevY;

    const drawLine = () => {
      const rect = helicopter.getBoundingClientRect();
      const helicopterX =
        rect.left + rect.width / 2 - containerRect.left + window.scrollX;
      const helicopterY =
        rect.top + rect.height / 2 - containerRect.top + window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(a, b);
      var cpy;
      if (helicopterY <= b - a) {
        cpy = b;
      } else {
        cpy = b;
      }
      ctx.quadraticCurveTo(
        helicopterX - a * 2,
        cpy+cpy*0.01,
        helicopterX,
        helicopterY
      );
      // console.log("Helicopter X : ",helicopterX ,"A value : ",helicopterX/1.2 -a*2);
      // console.log("Helicopter Y : ",helicopterY ,"B value : ",cpy);
      ctx.strokeStyle = "#950404";
      ctx.lineWidth = 4;

      const rectWidth = Math.abs(helicopterX - a);
      const rectHeight = canvas.height - helicopterY;
      const rectX = Math.min(prevX, helicopterX);
      const rectY = Math.min(prevY, helicopterY);

      ctx.lineTo(helicopterX, b);
      ctx.moveTo(a, b);
      ctx.lineTo(prevX, b);
      ctx.closePath();
      ctx.fillStyle = "#c816167e";
      ctx.fill();

      ctx.strokeStyle = "#c816167e";
      // ctx.lineWidth = 1;
      ctx.stroke();
      if (helicopterX === a) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      prevX = helicopterX;
      prevY = helicopterY;

      requestAnimationFrame(drawLine);
    };

    drawLine();
    const clearCanvasInterval = setInterval(() => {
      console.log("ajjfkajlk");
    }, 20000); // Clear the canvas every 20 seconds

    return () => {
      clearInterval(clearCanvasInterval);
    };
  }, []);


  // const helicopterStyle = {
  //   position: "absolute",
  //   zIndex: "10",
  //   width: "7rem",
  //   height: "3rem",
  //   animation: "moveHelicopter 20s linear infinite",
  //   bottom: "3%",
  //   left: "0%",
  //   transform: "rotate(45deg)"
  // };
  const helicopterStyle = {
    position: "absolute",
    zIndex: "2",
    width: "6rem",
    height: "4rem",
    borderRadius: "10px",
    animation: "moveHelicopter 400s linear infinite",
    bottom: "3%",
    left: "0%",
    transform:"rotate(90deg)"
  };

  return (
    <div
      style={{
        position: "absolute",
          height: "100%", //72
          width: "100%", //67
          background: "black",
          border: "1.5px solid white",
          borderRadius: "1rem",
          overflow: "hidden",
        // borderTop: "2.2rem solid rgb(197, 100, 31)",
        // borderRadius: "1rem",
        // overflow: "hidden",
        backgroundImage: `${Chakri}`,
        backgroundPosition: "center",
        
      }}
      className="aviator-container"
    >
      <style>
          {`
            @keyframes moveHelicopter {
              0% {
                transform: translate(0);
              }
              2% {
                transform: translate(32vw, -30vh);
              }
              3% {
                transform: translate(37vw, -19vh);
              }
              4% {
                transform: translate(32vw, -30vh);
              }
              5% {
                transform: translate(37vw, -19vh);
              }
              6% {
                transform: translate(32vw, -30vh);
              }
              7% {
                transform: translate(37vw, -19vh);
              }
              8% {
                transform: translate(32vw, -30vh);
              }
              9% {
                transform: translate(37vw, -19vh);
              }
              10% {
                transform: translate(32vw, -30vh);
              }
              11% {
                transform: translate(37vw, -19vh);
              }
              
              12% {
                transform: translate(30vw, -28vh);
              }
              13% {
                transform: translate(27vw, -30vh);
              }
              14% {
                transform: translate(37vw, -21vh);
              }
              15% {
                transform: translate(31vw, -30vh);
              }
              16% {
                transform: translate(37vw, -25vh);
              }
              17% {
                transform: translate(30vw, -30vh);
              }
              18% {
                transform: translate(37vw, -25vh);
              }
              19% {
                transform: translate(30vw, -27vh);
              }
              20% {
                transform: translate(37vw, -21vh);
              }
              21% {
                transform: translate(31vw, -30vh);
              }
              22% {
                transform: translate(37vw, -22vh);
              }
              23% {
                transform: translate(30vw, -26vh);
              }
              24% {
                transform: translate(30vw, -26vh);
              }
              25% {
                transform: translate(37vw, -21vh);
              }
              26% {
                transform: translate(31vw, -29vh);
              }
              27% {
                transform: translate(37vw, -20vh);
              }
              28% {
                transform: translate(30vw, -27vh);
              }
              29% {
                transform: translate(41vw, -22vh);
              }
              30% {
                transform: translate(37vw, -30vh);
              }
              31% {
                transform: translate(40vw, -27vh);
              }
              32% {
                transform: translate(31vw, -29vh);
              }
              33% {
                transform: translate(37vw, -19vh);
              }
              34% {
                transform: translate(30vw, -25vh);
              }
              35% {
                transform: translate(27vw, -29vh);
              }
              36% {
                transform: translate(37vw, -21vh);
              }
              37% {
                transform: translate(29vw, -29vh);
              }
              38% {
                transform: translate(37vw, -19vh);
              }
              39% {
                transform: translate(30vw, -29vh);
              }
              40% {
                transform: translate(37vw, -21vh);
              }
              41% {
                transform: translate(30vw, -27vh);
              }
              42% {
                transform: translate(37vw, -21vh);
              }
              43% {
                transform: translate(30vw, -28vh);
              }
              44% {
                transform: translate(37vw, -19vh);
              }
              45% {
                transform: translate(30vw, -25vh);
              }
              46% {
                transform: translate(27vw, -28vh);
              }
              47% {
                transform: translate(37vw, -21vh);
              }
              48% {
                transform: translate(31vw, -25vh);
              }
              50% {
                transform: translate(37vw, -19vh);
              }
              51% {
                transform: translate(30vw, -28vh);
              }
              52% {
                transform: translate(26vw, -30vh);
              }
              
              53% {
                transform: translate(30vw, -28vh);
              }
              54% {
                transform: translate(27vw, -30vh);
              }
              55% {
                transform: translate(37vw, -21vh);
              }
              56% {
                transform: translate(31vw, -30vh);
              }
              57% {
                transform: translate(37vw, -25vh);
              }
              58% {
                transform: translate(30vw, -30vh);
              }
              59% {
                transform: translate(37vw, -25vh);
              }
              61% {
                transform: translate(30vw, -27vh);
              }
              62% {
                transform: translate(37vw, -21vh);
              }
              63% {
                transform: translate(31vw, -30vh);
              }
              64% {
                transform: translate(37vw, -22vh);
              }
              65% {
                transform: translate(30vw, -26vh);
              }
              66% {
                transform: translate(30vw, -26vh);
              }
              67% {
                transform: translate(37vw, -21vh);
              }
              68% {
                transform: translate(31vw, -29vh);
              }
              69% {
                transform: translate(37vw, -20vh);
              }
              70% {
                transform: translate(30vw, -27vh);
              }
              72% {
                transform: translate(41vw, -22vh);
              }
              73% {
                transform: translate(37vw, -30vh);
              }
              74% {
                transform: translate(40vw, -27vh);
              }
              75% {
                transform: translate(31vw, -29vh);
              }
              76% {
                transform: translate(37vw, -19vh);
              }
              77% {
                transform: translate(30vw, -25vh);
              }
              78% {
                transform: translate(27vw, -29vh);
              }
              79% {
                transform: translate(37vw, -21vh);
              }
              80% {
                transform: translate(29vw, -29vh);
              }
              81% {
                transform: translate(37vw, -19vh);
              }
              83% {
                transform: translate(30vw, -29vh);
              }
              84% {
                transform: translate(37vw, -21vh);
              }
              85% {
                transform: translate(30vw, -27vh);
              }
              86% {
                transform: translate(37vw, -21vh);
              }
              87% {
                transform: translate(30vw, -28vh);
              }
              88% {
                transform: translate(37vw, -19vh);
              }
              89% {
                transform: translate(30vw, -25vh);
              }
              90% {
                transform: translate(27vw, -28vh);
              }
              92% {
                transform: translate(37vw, -21vh);
              }
              93% {
                transform: translate(31vw, -25vh);
              }
              94% {
                transform: translate(37vw, -19vh);
              }
              96% {
                transform: translate(30vw, -28vh);
              }
              97% {
                transform: translate(37vw, -19vh);
              }
              99% {
                transform: translate(30vw, -28vh);
              }
              100% {
                transform: translate(26vw, -30vh);
              }
            }
          `}
        </style> 
      <div className="marquee-left">
        <Marquee direction="down">
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
            <div className="dot-marquee"></div>
        </Marquee>
      </div>
      {/* <div style={
        {
          height:"100%",
          width:"3rem",
          background:"yellow"
        }
      }></div> */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      <div className="marquee-bottom">
        <Marquee speed="50" width="100%">
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
            <div className=" dot-marquee-bottom"></div>
        </Marquee>
      </div>
      <img
        style={helicopterStyle}
        className="rotated-helicopter"
        alt="helicopter"
        ref={helicopterRef}
        src={AviatorImg}
      />
    </div>
  );
};
