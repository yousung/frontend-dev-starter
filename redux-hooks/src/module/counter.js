import createReducer from "../common/createReducer";

export const types = {
  INCREMENT: "counter/INCREMENT",
  DECREMENT: "counter/DECREMENT",
};

export const actions = {
  increment: () => ({ type: types.INCREMENT }),
  decrement: () => ({ type: types.DECREMENT }),
};

const initState = { count: 0 };

const reducer = createReducer(initState, {
  [types.INCREMENT]: (state, _) => ++state.count,
  [types.DECREMENT]: (state, _) => --state.count,
});

export default reducer;
