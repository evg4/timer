import React, { useState, useEffect } from "react";

function Timer() {
  const [isTiming, setIsTiming] = useState(false);
  const [timer, setTimer] = useState(0);

  //change background colour every time the timer changes
  //can be reduced to useEffect(()=>{//code here})

  const changeColour = () => {
    let background = document.body;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    changeColour();
  }, [timer]);

  //start/stop timer when isTiming changes
  /*this uses an early exist; first it checks if isTiming is false, 
  and if it is it exits immediately.
  then we don't need to use another if block for the next bit - 
  that part of the code will only be reached if isTiming is true, 
  so we don't need to write the explicit check
  */

  useEffect(() => {
    if (!isTiming) return;
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isTiming]);

  //handle click
  //can refactor to setIsTiming(prev => !prev)

  const handleClick = () => {
    if (isTiming) {
      setIsTiming(false);
    }
    if (!isTiming) {
      setIsTiming(true);
    }
  };

  return (
    <div id="box">
      <h1>Timer</h1>
      <button onClick={handleClick}>
        {isTiming ? "Stop timer" : "Start timer"}
      </button>
      <p id="status">
        Status: {isTiming ? "Timer running" : "Timer not running"}
      </p>
      <p id="paragraph">{timer}</p>
    </div>
  );
}

export default Timer;
