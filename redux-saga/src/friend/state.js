import createReducer from '../common/createReducer';

const ADD = 'fritend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });

const INITIAL_STATE = { friends: [] };

const reducer = createReducer(INITIAL_STATE, {
  // 친구목록에 친구 추가
  [ADD]: (state, action) => state.friends.push(action.friend),
  // 해당 친구만 제외하고 친구 목록 리턴
  [REMOVE]: (state, action) =>
    state.friends.filter((friend) => friend.id !== action.friend.id),
  [EDIT]: (state, action) => {
    // 친구의 아이디를 찾는다.
    const index = state.friends.findIndex(
      (friend) => friend.id === action.friend.id
    );

    // 해당하는 친구가 있는 경우
    if (!!index) {
      state.friends[index] = action.friend;
    }
  },
});

export default reducer;
