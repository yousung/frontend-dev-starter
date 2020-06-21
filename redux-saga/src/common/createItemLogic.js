import createReducer from './createReducer';

const createItemLogic = (name) => {
  const ADD = `${name}/ADD`;
  const EDIT = `${name}/EDIT`;
  const REMOVE = `${name}/REMOVE`;

  const add = (item) => ({ type: ADD, item });
  const edit = (item) => ({ type: EDIT, item });
  const remove = (item) => ({ type: REMOVE, item });

  const INIT_STATE = { [name]: [] };

  const reducer = createReducer(INIT_STATE, {
    [ADD]: (state, action) => state[name].push(action.item),
    [EDIT]: (state, action) => {
      const index = state[name].findIndex((item) => item.id === action.item.id);

      if (!!index) {
        state[name][index] = action.item;
      }
    },
    [REMOVE]: (state, action) =>
      state[name].filter((item) => item.id !== action.item.id),
  });

  return { add, remove, edit, reducer };
};

export default createItemLogic;
