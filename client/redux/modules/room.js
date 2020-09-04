const CREATE = 'sequence/room/CREATE';
const JOIN = 'sequence/room/JOIN';

export const reducer = (state = { set: false }, action = {}) => {
  switch (action.type) {
    case CREATE:
      return { set: true, room: '', playerName: action.playerName };
    case JOIN:
      if (action.room) {
        return { set: true, room: action.room, playerName: action.playerName };
      }
      return state;
    default:
      return state;
  }
};

export const createRoom = (playerName) => ({ type: CREATE, playerName });
export const joinRoom = (room, playerName) => ({ type: JOIN, room, playerName });
