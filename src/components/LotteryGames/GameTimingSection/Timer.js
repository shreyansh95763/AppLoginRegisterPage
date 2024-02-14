import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import CSS file for styling

function Timer({ duration }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (timeLeft === 0) {
        setTimeLeft(duration); // Reset the timer when it reaches 00
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    // if (timeLeft === 0) {
    //   clearTimeout(timer);
    // }
    return () => clearTimeout(timer);
  }, [timeLeft,duration]);

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
