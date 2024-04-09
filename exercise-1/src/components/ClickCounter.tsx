import React, { useRef } from 'react';

function ClickCounter() {
  // Using useRef to keep track of the click count
  const count = useRef(0);

  const handleClick = () => {
    // Increment the current value of count
    count.current += 1;
    console.log(`Clicked ${count.current} times`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Check the console to see the click count.</p>
    </div>
  );
}

export default ClickCounter;