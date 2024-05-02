import React from "react";

export default function FlewAway({ result }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100%", //72
          width: "100%", //67
          background: "black",
          border: "1.5px solid white",
          borderRadius: "1rem",
          overflow: "hidden",
          // backgroundImage: `${Chakri}`,
          backgroundPosition: "center",
        }}
        className="aviator-container">
        <div className="loading-game">
          <div
            className="center-loading text-white text-center game-centeral-loading"
            style={{ height: "10rem" }}>
            <div className="secondary-font display-5 font-weight-bolder mt-5 waiting-text z-2 position-relative">
              {" "}
              FLEW AWAY!
            </div>
            <span
              className=" z-2 position-relative "
              style={{ color: "red", fontSize: "5rem", fontWeight: 700 }}>
              {result}x
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
