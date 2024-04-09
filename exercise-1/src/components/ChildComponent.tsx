import React, { useEffect, memo } from 'react';

const ChildComponent = memo(({ onClick }) => {
  useEffect(() => {
    console.log('ChildComponent rendering...');
  });

  return <button onClick={onClick}>Click me!</button>;
});

export default ChildComponent;