import { useRef, useEffect } from "react";

export const Aviator = () => {
  const helicopterRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const helicopter = helicopterRef.current;
    const canvas = canvasRef.current;
    
    // const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d"); // Define 'ctx' here

    const rect = helicopter.getBoundingClientRect();
    const helicopterX = rect.left + rect.width / 2 - canvas.getBoundingClientRect().left + window.scrollX;
    const helicopterY = rect.top + rect.height / 2 - canvas.getBoundingClientRect().top + window.scrollY;
     
    let prevX = helicopterX;
    let prevY = helicopterY;

    let a = prevX;
    let b = prevY;

    const drawLine = () => {
      const rect = helicopter.getBoundingClientRect();
      const helicopterX = rect.left + rect.width / 2 - canvas.getBoundingClientRect().left + window.scrollX;
      const helicopterY = rect.top + rect.height / 2 - canvas.getBoundingClientRect().top + window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      
      ctx.beginPath();
      ctx.moveTo(a,b);
      ctx.quadraticCurveTo(helicopterX-a,b, helicopterX, helicopterY);
     

        const rectWidth = Math.abs(helicopterX - a);
        const rectHeight = canvas.height - helicopterY;
        const rectX = Math.min(prevX, helicopterX);
        const rectY = Math.min(prevY, helicopterY);

        ctx.lineTo(helicopterX,canvas.height);
        ctx.moveTo(a,b)
        ctx.lineTo(prevX,canvas.height);
        ctx.closePath();

        ctx.fillStyle="red";
        ctx.fill();

        ctx.fillRect(rectX,rectY, Math.abs(helicopterX - prevX), rectHeight);
        ctx.fillRect(a, b, rectWidth, rectHeight);


      // ctx.lineTo(helicopterX,bottomCanvasHeight);
      // ctx.lineTo(helicopterX, helicopterY);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke();
      if(helicopterX === a){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      prevX = helicopterX;
      prevY = helicopterY;
      
      requestAnimationFrame(drawLine);
    };

    drawLine();
    const clearCanvasInterval = setInterval(() => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log("ajjfkajlk");
    }, 20000); // Clear the canvas every 20 seconds

    return () => {
      clearInterval(clearCanvasInterval);
    };
  }, []);

  const helicopterStyle = {
    position: "absolute",
    zIndex: "10",
    width: "100px",
    height: "80px",
    borderRadius: "10px",
    animation: "moveHelicopter 20s linear infinite",
    bottom: "-3%",
    left: "-5%",
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "0%",
        height: "100%",
        width: "100%",
        background: "black",
        border: "3px solid white",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes moveHelicopter {
            0% {
              transform: translate(0);
            }
            60% {
              transform: translate(80vw, -80vh);
            }
            80%{
              transform:translate(85vw,-70vh)
            }
            90%{
              transform:translate(83vw,-80vh)
            }
            100%{
              transform:translate(85vw,-74vh)
            }
          }
        `}
      </style>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      <img
        // className="helicopter"
        style={helicopterStyle}
        alt="helicopter"
        ref={helicopterRef}
        src="https://1968904493-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FOAPqUQVbLbsfI5YESl32%2Fuploads%2Fm4vyUwJGrGpW99FYgwtr%2FA_Illustration.svg?alt=media&token=d39cb713-9090-4c08-90b5-0c2354fe4b93"
      />
    </div>
  );
};
