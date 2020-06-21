import createReducer from '../common/createReducer';
import createItemLogic from '../common/createItemLogic';
import mergeReducers from '../common/mergeReducers';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from './common';

const { add, remove, edit, reducer: friendReducer } = createItemLogic(
  'friends'
);

const SET_AGE_LIMIT = 'friend/SET_AGE_LIMIT';
const SET_SHOW_LIMIT = 'friend/SET_SHOW_LIMIT';

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({
  type: SET_SHOW_LIMIT,
  showLimit,
});

const INITAL_STATE = { ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };
const reducer = createReducer(INITAL_STATE, {
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
});

const reducers = [reducer, friendReducer];
export default mergeReducers(reducers);
