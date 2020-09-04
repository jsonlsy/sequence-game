const UPDATE = 'sequence/turn/UPDATE';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { turn: action.turn, turnToPlay: action.turnToPlay };
    default:
      return state;
  }
};

export const updateTurnToPlay = (turn, turnToPlay) => ({ type: UPDATE, turn, turnToPlay });
