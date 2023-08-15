import React from 'react'

export const Child = ({sendDataToParent}) => {
    const dataToSend = "Hello from child!";

  const handleClick = () => {
    sendDataToParent(dataToSend);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}
