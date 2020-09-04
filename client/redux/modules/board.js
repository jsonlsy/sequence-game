const UPDATE = 'sequence/board/UPDATE';

export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.board;
    default:
      return state;
  }
};

export const updateBoard = (board) => ({ type: UPDATE, board });
