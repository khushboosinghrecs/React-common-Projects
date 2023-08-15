import React, { useEffect, useMemo, useState } from 'react';

function MyComponent({ a, b }) {
  // Memoizing the expensive calculation based on inputs a and b
  const result = useMemo(() => {
    console.log('Calculating result...');
    return a + b;
  }, [a, b]);

  // Side effect triggered when a or b changes
  useEffect(() => {
    console.log('Dependency changed! Fetching data...');
    fetchData(a, b)
      .then((data) => {
        // Handle data
      });

    return () => {
      // Cleanup code when component unmounts or dependencies change
      console.log('Cleaning up...');
    };
  }, [a, b]);

  return <div>{result}</div>;
}


const DiffMemoandEffect =()=>{
    return(
        <>
        <MyComponent a={4} b={5} />
        <MyComponent a={4} b={5} />

        </>
    )
}