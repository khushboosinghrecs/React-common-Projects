const { useState } = require("react");

const Timer = () => {
  const [isStart, setIsStart] = useState(true);
  const [timer, setTimer] = useState(0);

  const handleStart = () => {
    setIsStart(false);
    handleTimer();
  };
  const handleTimer = () => {
    let settime = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 100);
    setTimeout(() => {
      setIsStart(true);
      setTimer(0);
      clearInterval(settime);
    }, 100);
  };

  return isStart ? (
    <button onClick={() => handleStart()}>start</button>
  ) : (
    <>{timer}</>
  );
};

export default Timer;
