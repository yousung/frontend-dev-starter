import produce from 'immer';

const createReducer = (initState, handleMap) => (state = initState, action) =>
  produce(state, (draft) => {
    const handle = handleMap[action.type];
    if (handle) {
      handle(state, action);
    }
  });

export default createReducer;
