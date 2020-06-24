import React, { useState } from "react";
import { useDispatch } from "react-redux";

const useInput = () => {
  const [text, _text] = useState("", []);
  const dispatch = useDispatch();

  const setText = (e) => {
    const value = e.target.value;
    _text(value);
  };

  const success = (action) => {
    _text("");
    dispatch(action);
  };

  return [text, setText, success];
};

export default useInput;
