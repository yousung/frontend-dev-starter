import createReducer from '../common/createReducer';

export const types = {
  SET_LOADING: 'common/SET_LOADING',
  SET_MESSAGE: 'common/SET_MESSAGE',
  SHOW_MESSAGE: 'common/SHOW_MESSAGE',
};

export const actions = {
  setLoading: (isLoading) => ({type: types.SET_LOADING, isLoading}),
  showMessage: (message) => ({type: types.SHOW_MESSAGE, message}),
  setMessage: (message) => ({type: types.SET_MESSAGE, message}),
};

const INIT_STATE = {
  isLoading: false,
  message: '',
};

const reducer = createReducer(INIT_STATE, {
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_MESSAGE]: (state, action) => (state.message = action.message),
});

export default reducer;
