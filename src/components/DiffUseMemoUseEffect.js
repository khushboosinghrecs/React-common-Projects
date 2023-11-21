import React, { useEffect, useMemo, useState } from 'react';

function MyComponent({ data }) {
  const [processedData, setProcessedData] = useState(null);

  // Memoize expensive data processing
  const memoizedData = useMemo(() => {
    console.log("Calculating processed data...");

    // Expensive processing based on data
    return setProcessedData(data);
  }, [data]);

  // Use the processed data with side effect
  useEffect(() => {
    console.log("Processing data changed:", memoizedData);
    // Perform additional side effect logic here if needed
    setProcessedData(memoizedData);
  }, [memoizedData]);

  return (
    <div>
      {processedData && <p>{processedData}</p>}
    </div>
  );
}

function DiffUseMemoUseEffect() {
  return (
    <div>DiffUseMemoUseEffect

        <MyComponent data= {5} />
    </div>
  )
}

export default DiffUseMemoUseEffect;