import createReducer from '../common/createReducer';

export const types = {
  CALL_POKETMON_LIST: 'poketmon/CALL_POKETMON_LIST',
  SET_POKETMON_LIST: 'poketmon/SET_POKETMON_LIST',
  SET_LIST : 'poketmon/SET_LIST',
  ADD_FAV_POKETMON_LIST: 'poketmon/ADD_FAV_POKETMON_LIST',

  SET_LIMIT: 'poketmon/SET_LIMIT',
  SET_PAGE: 'poketmon/SET_PAGE',
};

export const actions = {
  callPoketmonList: () => ({type: types.CALL_POKETMON_LIST}),
  setPoketmonList: (poketmons) => ({type: types.SET_POKETMON_LIST, poketmons}),
  setList: (poketmons) => ({type: types.SET_LIST, poketmons}),

  setLimit: (limit) => ({type: types.SET_LIMIT, limit}),
  setPage: (page) => ({type: types.SET_PAGE, page}),
};

const INIT_STATE = {
  page: 1,
  limit: 20,
  list : [],
  poketmons: [],
  detail: {},
};
const reducer = createReducer(INIT_STATE, {
  [types.SET_LIST]: (state, action) => state.list = action.poketmons,
  [types.SET_LIMIT]: (state, action) => (state.limit = action.limit),
  [types.SET_PAGE]: (state, action) => (state.page = action.page),
  [types.SET_POKETMON_LIST]: (state, action) =>
    (state.poketmons = action.poketmons),
});

export default reducer;
