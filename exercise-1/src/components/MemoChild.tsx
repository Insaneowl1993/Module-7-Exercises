// MemoChild.js
import React from 'react';

function MemoChild({ name }) {
  console.log('Rendering MemoChild');
  return <p>Hello, {name}!</p>;
}

export default React.memo(MemoChild);