const UPDATE = 'sequence/winner/UPDATE';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { winner: action.winner };
    default:
      return state;
  }
};

export const updateWinner = (winner) => ({ type: UPDATE, winner });
