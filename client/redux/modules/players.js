const UPDATE = 'sequence/players/UPDATE';

export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.players;
    default:
      return state;
  }
};

export const updatePlayers = (players) => ({ type: UPDATE, players });
