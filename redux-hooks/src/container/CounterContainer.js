import React from "react";
import Counter from "../component/Counter";
import { actions } from "../module/counter";
import { useDispatch, useSelector } from "react-redux";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const {
    counter: { count },
    todo: { todos },
  } = useSelector((state) => state, []);

  const onInc = () => {
    dispatch(actions.increment());
  };
  const onDec = () => {
    dispatch(actions.decrement());
  };

  return (
    <div>
      <div>해야할 일들 : {todos.filter((todo) => !todo.done).length} </div>
      <div>처리한 일들 : {todos.filter((todo) => todo.done).length} </div>
      <Counter count={count} onDec={onDec} onInc={onInc} />
    </div>
  );
};

export default CounterContainer;
