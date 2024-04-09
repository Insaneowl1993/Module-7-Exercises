import React, { useState, useMemo } from 'react';

export default function Fibonacci() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  // A memoized function that calculates the nth Fibonacci number
  const calculateFib = n => {
    if (n <= 1) return n;
    return calculateFib(n - 1) + calculateFib(n - 2);
  };

  // useMemo will ensure that the Fibonacci number is only recalculated when 'num' changes
  const fib = useMemo(() => {
    console.log("Calculating Fibonacci");
    return calculateFib(num);
  }, [num]);

  return (
    <div>
      <input 
        type="number" 
        value={num} 
        onChange={e => setNum(Number(e.target.value))} 
        min="1"
      />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Fibonacci result: {fib}</p>
      <p>Count: {count}</p>
    </div>
  );
}