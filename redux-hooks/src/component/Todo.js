import React from "react";

const Todo = ({ id, todo, done, onToggle, onRmove }) => {
  return (
    <div>
      <span>
        {todo} : {done ? "Y" : "N"}
      </span>
      <button
        onClick={() => {
          onToggle(id);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          onRmove(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Todo;
