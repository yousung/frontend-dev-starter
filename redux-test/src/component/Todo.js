import React from 'react';

const Todo = ({ id, text, done, onToggle, onDelete }) => {
  return (
    <div>
      <button
        onClick={() => {
          onToggle(id);
        }}
        style={{ textDecoration: done ? 'line-through' : 'none' }}
      >
        {text}
      </button>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Todo;
