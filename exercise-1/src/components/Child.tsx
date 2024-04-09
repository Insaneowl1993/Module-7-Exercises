// Child.js
import React from 'react';

function Child({ name }) {
  console.log('Rendering Child');
  return <p>Hello, {name}!</p>;
}

export default Child;

