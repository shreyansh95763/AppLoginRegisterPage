import React from "react";
import avi from "../../Assets/Aviator/aviator-main.png";
import rotator from "../../Assets/Aviator/rotator.png";

export default function Progressbar({ betTime }) {
  return (
    <>
      <div
      //  style={{
      //   position: "absolute",
      //   top: "27%",
      //   left: "30%",
      //   height: "73%",
      //   width: "70%",
      //   // background: "black",
      //   border: "1.5px solid white",
      //   borderTop: "2.2rem solid rgb(197, 100, 31)",
      //   borderRadius: "1rem",
      //   overflow: "hidden",
      //   // backgroundImage: `${Chakri}`,
      //   backgroundPosition: "center",
      // }}
      style={{
          position: "absolute",
          height: "100%", //72
          width: "100%", //67
          background: "black",
          border: "1.5px solid white",
        // borderTop: "2.2rem solid rgb(197, 100, 31)",
          borderRadius: "1rem",
          overflow: "hidden",
          // backgroundImage: `${Chakri}`,
          backgroundPosition: "center",
        }}
        className="aviator-container">
        <div className="loading-game">
          <div
            className="center-loading  text-center pt-3 game-centeral-loading "
            style={{}}>
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={120}
            viewBox="0 0 120 120">

              
            <ges fill="#E50539" fillRule="nonzero">
              <path d="M67.785 67.77a10.882 10.882 0 0 0 2.995-5.502l18.37-6.36c.47-.163.876-.471 1.16-.88l29.263-42.18a2.343 2.343 0 0 0-.268-2.993L110.153.704a2.344 2.344 0 0 0-3.314 0L95.73 11.813C71.965-5.861 38.683-3.514 17.58 17.588a60.26 60.26 0 0 0-8.829 11.21 2.343 2.343 0 0 0 4.001 2.441 55.575 55.575 0 0 1 8.142-10.336C40.184 1.613 70.512-.68 92.378 15.165l-5.72 5.72c-8.742-5.967-19.302-8.837-29.947-8.1a47.31 47.31 0 0 0-30.183 13.751 47.722 47.722 0 0 0-5.92 7.207 2.344 2.344 0 0 0 3.897 2.605 42.996 42.996 0 0 1 5.337-6.497c14.233-14.234 36.774-16.445 53.436-5.586l-6.818 6.818a33.418 33.418 0 0 0-19.773-4.186A33.338 33.338 0 0 0 36.47 36.48a2.344 2.344 0 0 0 3.314 3.314c8.787-8.786 22.336-10.795 33.215-5.248L58.38 49.163a10.969 10.969 0 0 0-6.164 3.084 10.882 10.882 0 0 0-2.996 5.504l-18.37 6.36c-.47.163-.876.47-1.159.879L.427 107.17a2.343 2.343 0 0 0 .268 2.992l9.152 9.151a2.337 2.337 0 0 0 1.657.687c.6 0 1.2-.23 1.657-.687l11.109-11.109A59.835 59.835 0 0 0 59.99 120a59.873 59.873 0 0 0 42.43-17.571 60.476 60.476 0 0 0 7.162-8.63 2.343 2.343 0 1 0-3.87-2.643 55.793 55.793 0 0 1-6.606 7.959c-19.321 19.32-49.61 21.598-71.487 5.74l5.722-5.723a47.325 47.325 0 0 0 30.058 8.092A47.318 47.318 0 0 0 93.472 93.48a47.82 47.82 0 0 0 5.15-6.09 2.343 2.343 0 0 0-3.82-2.715 43.106 43.106 0 0 1-4.644 5.49c-14.21 14.211-36.783 16.436-53.436 5.587l6.82-6.82a33.416 33.416 0 0 0 19.825 4.182A33.343 33.343 0 0 0 83.53 83.54a2.344 2.344 0 0 0-3.314-3.315c-8.777 8.778-22.34 10.792-33.215 5.25L61.62 70.855a10.97 10.97 0 0 0 6.165-3.084zm40.711-62.095l6.11 6.11-27.712 39.944-16.207 5.61a10.892 10.892 0 0 0-2.903-5.092 10.953 10.953 0 0 0-3.512-2.348l44.224-44.224zM11.504 114.342l-6.11-6.11 27.712-39.944 16.207-5.61a10.892 10.892 0 0 0 2.903 5.092 10.953 10.953 0 0 0 3.512 2.348l-44.224 44.224zm44.018-49.894a6.223 6.223 0 0 1-1.85-4.44l.003-.094c.036-.19.047-.383.035-.579a6.22 6.22 0 0 1 1.812-3.766A6.33 6.33 0 0 1 60 53.726a6.33 6.33 0 0 1 4.478 1.843 6.223 6.223 0 0 1 1.85 4.44l-.003.094a2.325 2.325 0 0 0-.035.579 6.22 6.22 0 0 1-1.812 3.766c-2.47 2.458-6.487 2.457-8.956 0z" />
              <path d="M113.341 82.064a2.344 2.344 0 0 0-3.115 1.131l-.026.057a2.343 2.343 0 1 0 4.26 1.955l.013-.028a2.344 2.344 0 0 0-1.132-3.115zM7.65 35.765a2.343 2.343 0 0 0-3.072 1.241l-.021.05a2.338 2.338 0 0 0 2.165 3.228c.922 0 1.8-.55 2.173-1.454.5-1.19-.056-2.56-1.245-3.065z" />
            </ges>
          </svg> */}
            <img
              className="progress-rotator"
              src={rotator}
              alt=""
              height={120}
              width={120}
            />
            <div className="secondary-font f-40 text-white mt-2 waiting-text z-2 position-relative">
              {" "}
              WAITING FOR NEXT ROUND
            </div>
            <div className="line-loader mt-2">
              <div className="fill-line" style={{ width: `${betTime * 10}` }} />
              <div className="progress"></div>
            </div>
          </div>
          {/* <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        /> */}
          <div className="bottom-left-plane">
            <img
              className="plane-static z-3 position-absolute mt-3"
              src={avi}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
