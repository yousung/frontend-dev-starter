import produce from 'immer';

const createReducer = (initState, action) => (state = initState, handleMap) =>
  produce(state, (draft) => {
    const handle = handleMap[action.type];
    if (!!handle) {
      handle(draft, action);
    }
  });

export default createReducer;
