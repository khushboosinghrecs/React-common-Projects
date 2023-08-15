import React from 'react'

export const Parent = () => {
const [receivedData, setReceivedData] = useState(null);
  const handleReceiveData = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Received data from child: {receivedData}</p>
      <ChildComponent sendDataToParent={handleReceiveData} />
    </div>
  );
}
