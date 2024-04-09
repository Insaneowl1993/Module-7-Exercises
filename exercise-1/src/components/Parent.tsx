// the parent component
import React, { useState, useEffect } from 'react';
import Child from './Child';
import MemoChild from './MemoChild';

export default function MemoExercise() {
  const [time, setTime] = useState(Date.now());
  const [name] = useState('John');

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1>Time: {time}</h1>
      <Child name={name} />
      <MemoChild name={name} />
    </div>
  );
}