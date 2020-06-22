import createReducer from '../../common/createReducer';
import createItemLogic from '../../common/createItemLogic';
import mergeReducers from '../../common/mergeReducers';

const { add, remove, edit, reducer: timelineReudcer } = createItemLogic(
  'timelines'
);

export const types = {
  INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
  REQUEST_LIKE: 'timeline/REQUEST_LIKE',
  ADD_LIKE: 'timeline/ADD_LIKE',
  SET_LOADING: 'timeline/SET_LOADING',
  SET_ERROR: 'timeline/SET_ERROR',
};

export const actions = {
  addTimeline: add,
  removeTimeline: remove,
  editTimeline: edit,
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setError: (error) => ({ type: types.SET_ERROR, error }),
};

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      (item) => item.id === action.timelineId
    );

    if (!!timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_ERROR]: (state, action) => (state.error = action.error),
});

const reducers = [reducer, timelineReudcer];
export default mergeReducers(reducers);
