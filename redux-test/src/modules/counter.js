import createReducer from '../common/createReducer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const COLOR_CHANGE = 'counter/COLOR_CHANGE';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const colorChange = (color) => ({ type: COLOR_CHANGE, color });

const INITAL_STATE = { count: 0, color: 'red' };
const reducer = createReducer(INITAL_STATE, {
  [INCREMENT]: (state, _) => ++state.count,
  [DECREMENT]: (state, _) => --state.count,
  [COLOR_CHANGE]: (state, action) => (state.color = action.color),
});

export default reducer;
