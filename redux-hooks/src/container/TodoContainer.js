import React from "react";
import Todo from "../component/Todo";
import useInput from "../common/useInput";
import { actions } from "../module/todo";
import { useDispatch, useSelector } from "react-redux";

const TodoContainer = () => {
  const [text, changeText, success] = useInput();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo, []);
  const addTodo = () => {
    success(actions.addTodo(text));
  };

  const onToggle = (id) => {
    dispatch(actions.toggleTodo(id));
  };
  const onRemove = (id) => {
    dispatch(actions.removeTodo(id));
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={changeText} />
        <button onClick={addTodo}>확인</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo {...todo} onRmove={onRemove} onToggle={onToggle} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoContainer;
