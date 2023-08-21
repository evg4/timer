import React, { useState, useEffect } from "react";

function Timer() {
  const [isTiming, setIsTiming] = useState(false);
  const [timer, setTimer] = useState(0);

  const testFunc = () => {
    let i = 5;
  };

  const intervalId = () => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const handleClick = () => {
    setIsTiming(true);
    intervalId();
  };

  const changeColour = () => {
    let background = document.body;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    document.getElementById("paragraph").innerHTML = timer;
  }, [timer]);

  useEffect(() => {
    changeColour();
  }, [timer]);

  return (
    <div id="box">
      <h1>Timer</h1>
      <button onClick={handleClick}>Click here to start timer</button>
      <p id="status">
        Status: {isTiming ? "Timer running" : "Timer not running"}
      </p>
      <p id="paragraph"></p>
    </div>
  );
}

export default Timer;
