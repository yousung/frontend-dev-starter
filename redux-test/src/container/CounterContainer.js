import React from 'react';
import Counter from '../component/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { colorChange, decrement, increment } from '../modules/counter';

const CounterContainer = () => {
  const { count, color } = useSelector((state) => state.counter, []);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  const onColorChange = () => {
    const colorList = ['red', 'green', 'blue', 'magenta', 'cyan', 'gray'];
    const color = colorList[Math.floor(Math.random() * colorList.length)];
    dispatch(colorChange(color));
  };

  return (
    <Counter
      count={count}
      increment={onIncrement}
      decrement={onDecrement}
      onColor={onColorChange}
      color={color}
    />
  );
};

export default CounterContainer;
