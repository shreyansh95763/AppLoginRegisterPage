import { useRef, useEffect } from "react";
import { HeaderWinGo } from "../LotteryGames/HeaderWinGo";

export const Aviator = () => {
  const helicopterRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const helicopter = helicopterRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 0;
    let y = 0;

    const drawLine = () => {
      const rect = helicopter.getBoundingClientRect();
      const helicopterX = rect.left + rect.width / 2;
      const helicopterY = rect.top + rect.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(helicopterX, helicopterY);
      ctx.strokeStyle = "white";
      ctx.stroke();

      x = helicopterX;
      y = helicopterY;

      requestAnimationFrame(drawLine);
    };

    drawLine();
  }, []);

  return (
    <>
      {/* <HeaderWinGo /> */}
      <div
        style={{
          position: "fixed",
          left: "30%",
          height: "100%",
          width: "50%",
          background: "red",
          border: "3px solid white",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            zIndex: "1",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></canvas>
        <img
          className="helicopter"
          alt="helicopter"
          style={{
            position: "absolute",
            zIndex: "2",
            bottom: "0",
            left: "0",
          }}
          ref={helicopterRef}
          src="https://1968904493-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FOAPqUQVbLbsfI5YESl32%2Fuploads%2Fm4vyUwJGrGpW99FYgwtr%2FA_Illustration.svg?alt=media&token=d39cb713-9090-4c08-90b5-0c2354fe4b93"
        />
      </div>
    </>
  );
};
