import React, { useRef, useEffect } from "react";
import AviatorImg from "C:/Users/SHREYANSH/Desktop/Projects/bdgGame/bdggame/src/Assets/aviator.png"
import Chakri from "C:/Users/SHREYANSH/Desktop/Projects/bdgGame/bdggame/src/Assets/chakra.png";
import Marquee from "react-fast-marquee";

export const Aviator = () => {
  const helicopterRef = useRef(null);
  const canvasRef = useRef(null);

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
    const helicopterX = rect.left + rect.width / 2 - containerRect.left + window.scrollX;
    const helicopterY = rect.top + rect.height / 2 - containerRect.top + window.scrollY;

    let prevX = helicopterX;
    let prevY = helicopterY;

    let a = prevX;
    let b = prevY;

    const drawLine = () => {
      const rect = helicopter.getBoundingClientRect();
      const helicopterX = rect.left + rect.width / 2 - containerRect.left + window.scrollX;
      const helicopterY = rect.top + rect.height / 2 - containerRect.top + window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(a, b); 
      var cpy;
      if(helicopterY<=b-a){
        cpy=b
      }
      else{
        cpy= b;
      }
      ctx.quadraticCurveTo(helicopterX - a, cpy, helicopterX, helicopterY);
      ctx.strokeStyle = "red";

      const rectWidth = Math.abs(helicopterX - a);
      const rectHeight = canvas.height - helicopterY;
      const rectX = Math.min(prevX, helicopterX);
      const rectY = Math.min(prevY, helicopterY);

      ctx.lineTo(helicopterX, b);
      ctx.moveTo(a, b);
      ctx.lineTo(prevX, b);
      ctx.closePath();
      ctx.fillStyle = "red";
      ctx.fill();

      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
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

  const helicopterStyle = {
    position: "absolute",
    zIndex: "10",
    width: "7rem",
    height: "3rem",
    borderRadius: "10px",
    animation: "moveHelicopter 20s linear infinite",
    bottom: "3%",
    left: "0%",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "27%",
        left: "30%",
        height: "73%",
        width: "70%",
        // background: "black",
        border: "1.5px solid white",
        borderTop: "2.2rem solid rgb(197, 100, 31)",
        borderRadius: "1rem",
        overflow: "hidden",
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
            60% {
              transform: translate(30vw, -35vh);
            }
            80% {
              transform: translate(45vw, -45vh);
            }
            90% {
              transform: translate(48vw, -40vh);
            }
            100% {
              transform: translate(45vw, -50vh);
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
        alt="helicopter"
        ref={helicopterRef}
        src={AviatorImg}
      />
    </div>
  );
};
