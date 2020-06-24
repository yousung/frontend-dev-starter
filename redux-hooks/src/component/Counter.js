import React from "react";

const Counter = ({ count, onInc, onDec }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onInc}>+</button>
      <button onClick={onDec}>-</button>
    </div>
  );
};

export default Counter;
