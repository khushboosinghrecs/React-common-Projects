import React, {useMemo} from 'react'



function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function FibonacciComponent({ n }) {
  {console.log('in fib component')}
  const result = useMemo(() => {
    console.log("Calculating Fibonacci for", n);
    return fibonacci(n);
  }, [n]);

  return (
    <div>
      <p>Fibonacci({n}) = {result}</p>
    </div>
  );
}

const Checkdiff =()=> {
    {console.log('not in return');}
    return (
      <div>
        <p>Checkdiff</p>
         {console.log('hello world in return')}
      <FibonacciComponent n={5} />
      <FibonacciComponent n={10} />
      <FibonacciComponent n={5} />
      <FibonacciComponent n={15} />
      <FibonacciComponent n={15} />
      <FibonacciComponent n={15} />
      </div>
    )
  }
  
  export default Checkdiff;

  