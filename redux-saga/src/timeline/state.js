import createReducer from '../common/createReducer';

const ADD = 'timeline/ADD';
const REMOVE = 'timeline/REMOVE';
const EDIT = 'timeline/EDIT';
const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

export const addTimeline = (timeline) => ({ type: ADD, timeline });
export const removeTimeline = (timeline) => ({ type: REMOVE, timeline });
export const editTimeline = (timeline) => ({ type: EDIT, timeline });
export const increaseNextPage = (timeline) => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { timeilnes: [], nextPage: 0 };

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.timeilnes.push(action.timeline),
  [REMOVE]: (state, action) =>
    state.timeilnes.filter((timeline) => timeline.id !== action.timeline.id),
  [EDIT]: (state, action) => {
    const index = state.timeilnes.findIndex(
      (timeline) => timeline.id === action.timeline.id
    );

    if (!!index) {
      state.timeilnes[index] = action.timeline;
    }
  },
  [INCREASE_NEXT_PAGE]: (state, _) => (state.nextPage += 1),
});

export default reducer;
