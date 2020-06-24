import React from 'react';

const Counter = ({ count, increment, decrement, color, onColor }) => {
  return (
    <div>
      <p>{count}</p>
      <div style={{ background: color, width: 50, height: 50 }}>컬러</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={onColor}>CHANGE</button>
    </div>
  );
};

export default Counter;
