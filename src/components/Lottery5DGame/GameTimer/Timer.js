import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import CSS file for styling

function Timer({ duration ,timeLefts }) {
  const [ time , setTime] = useState(timeLefts);
  const [timeLeft, setTimeLeft] = useState(time);
  
  if(time !==  timeLefts){
    console.log(time);
    console.log(timeLeft);
    console.log(timeLefts);
    setTime(timeLefts);
    setTimeLeft(timeLefts);
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimeLeft(duration);
      }
    }, 1000);
   
    return () => clearTimeout(timer);
  }, [duration,timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Pad the digits with zeros and convert to array of characters
  const minuteDigits = minutes.toString().padStart(2, '0').split('');
  const secondDigits = seconds.toString().padStart(2, '0').split('');

  return (
    <div className="timer-container">
      <div className="digit-container">
        {minuteDigits.map((digit, index) => (
          <div key={index} className="digit-box">{digit}</div>
        ))}
      </div>
      <div className="separator digit-box">:</div>
      <div className="digit-container">
        {secondDigits.map((digit, index) => (
          <div key={index} className="digit-box">{digit}</div>
        ))}
      </div>
    </div>
  );
}

export default Timer;
