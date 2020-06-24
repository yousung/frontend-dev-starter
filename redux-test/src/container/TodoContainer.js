import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../component/Todo';
import { addTodo, toggleTodo, removeTodo, setText } from '../modules/todo';

const TodoContainer = () => {
  const { todos, text } = useSelector((state) => state.todo, []);
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(addTodo(text));
    dispatch(setText(''));
  };

  const changeText = (e) => {
    const value = e.currentTarget.value;
    dispatch(setText(value));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={changeText} />
      <button onClick={onAddTodo}>추가</button>

      {todos.map((todo) => {
        const { text, done, id } = todo;
        return (
          <Todo
            id={id}
            key={id}
            text={text}
            done={done}
            onDelete={onRemoveTodo}
            onToggle={onToggleTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoContainer;
