import React from 'react';
import { useCounter } from './useCounter';

function CounterComponent() {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
