import React, { useState, useEffect, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  useEffect(() => {
    console.log('ParentComponent rendering...');
  });

  const [count, setCount] = useState(0);
  
  const callback = useCallback(() => {
    setCount(count => count + 1);
    console.log('Button clicked!');
  }, []);

  return (
    <div>
      {count} <ChildComponent onClick={callback} />
    </div>
  );
}

export default ParentComponent;